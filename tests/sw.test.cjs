// The service worker must not make the logos or the images wait (version 0.1.218).
// Runs the real src/sw.js against a cache that behaves like the browser's: reads of a cache run
// after the writes that started before them, and a write lasts until the whole file has arrived.
// SW_FILE=<path> runs the same checks against another copy (for example an older version).
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const file = process.env.SW_FILE || path.join(root, 'src/sw.js');
const source = fs.readFileSync(file, 'utf8')
  .replace('__VERSION__', 'test')
  .replace('__CORE__', JSON.stringify(['./', './index.html', './brand/utac.webp', './brand/cace-horitzontal.svg']));
const ORIGIN = 'https://example.test';
const SCOPE = ORIGIN + '/cace_imgs/';
const PAGE_MS = 400;
const wait = ms => new Promise(r => setTimeout(r, ms));

// A response whose body arrives after `ms` milliseconds, like a large file on a slow line.
function slowResponse(ms, type = 'text/html') {
  const body = new ReadableStream({ start(c) { setTimeout(() => { c.enqueue(new Uint8Array(1000)); c.close(); }, ms); } });
  return new Response(body, { headers: { 'content-type': type } });
}

class BrowserLikeCache {
  constructor(log) { this.queue = Promise.resolve(); this.store = new Map(); this.log = log; }
  key(k) { return new URL(typeof k === 'string' ? k : k.url, SCOPE).href; }
  run(fn) { const r = this.queue.then(fn); this.queue = r.catch(() => {}); return r; }
  match(k, options = {}) {
    if (options.ignoreSearch) this.log.push('ignoreSearch');
    return this.run(() => this.store.get(this.key(k))?.clone());
  }
  put(k, res) {
    return this.run(async () => { const body = await res.arrayBuffer(); this.store.set(this.key(k), new Response(body, { headers: res.headers })); });
  }
  addAll(requests) { return Promise.all(requests.map(r => this.put(r.url ?? r, new Response('x')))); }
  keys() { return Promise.resolve([...this.store.keys()].map(url => ({ url }))); }
  delete(k) { return Promise.resolve(this.store.delete(this.key(k))); }
}

function worker(fetchImpl) {
  const log = [], handlers = {}, named = new Map();
  const caches = {
    open: async name => { if (!named.has(name)) named.set(name, new BrowserLikeCache(log)); return named.get(name); },
    keys: async () => [...named.keys()],
    delete: async name => named.delete(name),
    match: async (k, options = {}) => {
      log.push('caches.match');
      if (options.ignoreSearch) log.push('ignoreSearch');
      for (const c of named.values()) { const hit = await c.match(k); if (hit) return hit; }
    },
  };
  const self = {
    location: new URL(SCOPE + 'sw.js'),
    registration: { scope: SCOPE, navigationPreload: { enable: async () => {} } },
    clients: { claim: async () => {} },
    skipWaiting: async () => {},
    addEventListener: (type, fn) => { handlers[type] = fn; },
  };
  vm.runInNewContext(source, { self, caches, fetch: fetchImpl, Request: class { constructor(url, o) { this.url = new URL(url, SCOPE).href; Object.assign(this, o); } }, Response, URL, Promise, console });
  const lifecycle = async type => { let p; handlers[type]({ waitUntil: x => { p = x; } }); await p; };
  const request = (relative, extra = {}) => {
    let answer; const pending = [];
    handlers.fetch({
      request: { method: 'GET', url: SCOPE + relative, mode: 'no-cors', destination: '', ...extra },
      respondWith: p => { answer = p; },
      waitUntil: p => pending.push(p),
      preloadResponse: Promise.resolve(undefined),
    });
    return { answer, done: () => Promise.all(pending) };
  };
  return { log, caches, lifecycle, request };
}

const timed = async promise => { const t0 = Date.now(); const res = await promise; return { res, ms: Date.now() - t0 }; };

test('the logos do not wait for the page to be saved', async () => {
  const sw = worker(async req => (req.mode === 'navigate' ? slowResponse(PAGE_MS) : new Response('logo')));
  await sw.lifecycle('install'); await sw.lifecycle('activate');
  const page = sw.request('', { mode: 'navigate' });
  await page.answer; // the page starts arriving; its body is still on its way
  const logo = await timed(sw.request('brand/utac.webp', { destination: 'image' }).answer);
  assert.ok(logo.res, 'the logo is answered');
  assert.ok(logo.ms < PAGE_MS / 2, `the logo waited ${logo.ms} ms behind the page`);
});

test('an image does not wait for other images that are still downloading', async () => {
  let n = 0;
  const sw = worker(async () => (n++ === 0 ? slowResponse(PAGE_MS, 'image/webp') : new Response('img')));
  await sw.lifecycle('install'); await sw.lifecycle('activate');
  const first = sw.request('assets/a.webp', { destination: 'image' });
  await first.answer; // headers in, body still arriving
  const second = await timed(sw.request('assets/b.webp', { destination: 'image' }).answer);
  assert.ok(second.ms < PAGE_MS / 2, `the second image waited ${second.ms} ms behind the first`);
});

test('images and the page are still kept for use without a connection', async () => {
  let online = true;
  const sw = worker(async req => { if (!online) throw new TypeError('offline'); return new Response(req.mode === 'navigate' ? 'page' : 'img'); });
  await sw.lifecycle('install'); await sw.lifecycle('activate');
  const page = sw.request('', { mode: 'navigate' }); await page.answer; await page.done();
  const img = sw.request('assets/a.webp', { destination: 'image' }); await img.answer; await img.done();
  online = false;
  assert.equal(await (await sw.request('', { mode: 'navigate' }).answer).text(), 'page');
  assert.equal(await (await sw.request('assets/a.webp', { destination: 'image' }).answer).text(), 'img');
  assert.ok(await sw.request('brand/utac.webp', { destination: 'image' }).answer, 'logo from the install copy');
});

test('no lookup goes through every saved entry', async () => {
  const sw = worker(async () => new Response('x'));
  await sw.lifecycle('install'); await sw.lifecycle('activate');
  for (const p of ['brand/utac.webp', 'assets/a.webp', 'offline.json']) await sw.request(p, { destination: 'image' }).answer;
  assert.deepEqual(sw.log, []);
  assert.doesNotMatch(source, /ignoreSearch\s*:\s*true/);
});
