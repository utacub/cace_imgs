/* CACE Imatges · service worker. GPL-3.0-or-later.
   Keeps the app working without a connection once it has been installed or opened.
   - The page is fetched from the network first, so a new version is used as soon as there is a
     connection; without one, the copy saved here is served.
   - The page's own files (logos, icons, manifest) are saved when the worker is installed.
   - Images (assets/…) are kept in their own cache, which survives new versions of the app:
     each image is saved the first time it is shown, and the install window can download all of
     them, or only some collections, in advance (src/app.js, «Instal·lar»).
   The build (scripts/build.py) writes the version and the list of the page's files.

   SPEED RULES (tests/sw.test.cjs checks them; version 0.1.218 fixed a 2-second delay of the
   logos and the images caused by breaking them):
   1. Never answer a request after a cache write. The browser runs the reads of a cache after
      the writes that started before them, and a write lasts until the whole file has arrived, so
      a read that waits behind the 5 MB page or behind other images holds the logo or the image
      for seconds. Answer first; save the copy afterwards, from a file already read in full.
   2. Never look up ignoring the query string (the ignoreSearch option) and never with
      caches.match() across every cache: both make the browser go through every saved entry (thousands of images).
   3. The logos are read only from the cache of this version, which is written once, at install;
      the page copy and offline.json go to their own cache (PAGE). */
const VERSION = 'cace-app-__VERSION__';
const PAGE = 'cace-pagina';
const IMAGES = 'cace-imatges';
const CORE = __CORE__;

self.addEventListener('install', event => {
  event.waitUntil(caches.open(VERSION)
    .then(cache => cache.addAll(CORE.map(u => new Request(u, { cache: 'reload' }))))
    .then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('cace-app-') && k !== VERSION).map(k => caches.delete(k))))
    // The page request starts while the worker is still waking up.
    .then(() => self.registration.navigationPreload?.enable())
    .catch(() => {})
    .then(() => self.clients.claim()));
});

// Saves a copy after the answer has been given: the body is read in full first, so the cache
// write itself is short and never waits for the network.
const saveLater = (event, cacheName, key, res) => {
  if (!res.ok) return res;
  const copy = res.clone();
  event.waitUntil(copy.blob()
    .then(body => caches.open(cacheName).then(c => c.put(key, new Response(body, { headers: copy.headers }))))
    .catch(() => {}));
  return res;
};
const fromCache = (cacheName, key) => caches.open(cacheName).then(c => c.match(key));

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const scope = new URL(self.registration.scope).pathname;
  const path = url.pathname.startsWith(scope) ? url.pathname.slice(scope.length) : url.pathname;
  if (req.mode === 'navigate') {
    const page = path === '' || path === 'index.html';
    event.respondWith(Promise.resolve(event.preloadResponse).then(pre => pre || fetch(req))
      .then(res => page ? saveLater(event, PAGE, './', res) : res)
      .catch(() => fromCache(PAGE, './').then(hit => hit || fromCache(VERSION, './index.html'))));
    return;
  }
  if (path === 'offline.json') {
    event.respondWith(fetch(req).then(res => saveLater(event, PAGE, 'offline.json', res))
      .catch(() => fromCache(PAGE, 'offline.json')));
    return;
  }
  if (path.startsWith('assets/')) {
    const key = url.origin + url.pathname;
    event.respondWith(fromCache(IMAGES, key).then(hit => hit || fetch(req)
      // Only images shown on the page are saved here; the install window saves its own downloads.
      .then(res => req.destination === 'image' ? saveLater(event, IMAGES, key, res) : res)));
    return;
  }
  event.respondWith(fromCache(VERSION, url.origin + url.pathname).then(hit => hit || fetch(req)));
});
