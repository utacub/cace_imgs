/* CACE Imatges · service worker. GPL-3.0-or-later.
   Keeps the app working without a connection once it has been installed or opened.
   - The page is fetched from the network first, so a new version is used as soon as there is a
     connection; without one, the copy saved here is served.
   - The page's own files (logos, icons, manifest) are saved when the worker is installed.
   - Images (assets/…) are kept in their own cache, which survives new versions of the app:
     each image is saved the first time it is shown, and the install window can download all of
     them, or only some collections, in advance (src/app.js, «Instal·lar»).
   The build (scripts/build.py) writes the version and the list of the page's files. */
const VERSION = 'cace-app-__VERSION__';
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
    .then(() => self.clients.claim()));
});

const saveCopy = (cacheName, key, res) => {
  if (res.ok) { const copy = res.clone(); caches.open(cacheName).then(c => c.put(key, copy)); }
  return res;
};

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  const scope = new URL(self.registration.scope).pathname;
  const path = url.pathname.startsWith(scope) ? url.pathname.slice(scope.length) : url.pathname;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(res => {
      if (res.ok && (path === '' || path === 'index.html')) {
        const a = res.clone(), b = res.clone();
        caches.open(VERSION).then(c => Promise.all([c.put('./index.html', a), c.put('./', b)]));
      }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match('./index.html'))));
    return;
  }
  if (path === 'offline.json') {
    event.respondWith(fetch(req).then(res => saveCopy(VERSION, req, res)).catch(() => caches.match(req)));
    return;
  }
  if (path.startsWith('assets/')) {
    event.respondWith(caches.open(IMAGES).then(c => c.match(req, { ignoreSearch: true }))
      .then(hit => hit || fetch(req).then(res => saveCopy(IMAGES, req, res))));
    return;
  }
  event.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req)));
});
