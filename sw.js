/* Service Worker – Fresh Digital (EDEKA Food Academy Fresh)
   - Seite & Skripte: immer beim Server nachfragen, sonst Zwischenspeicher (Updates kommen sofort an, offline geht trotzdem)
   - Bilder & Schriften: sofort aus dem Zwischenspeicher, im Hintergrund aktualisieren
   - Fremde Seiten (z. B. Video-Anbieter) werden nicht angefasst
   Bei grundlegenden Änderungen VERSION erhöhen → alter Zwischenspeicher wird gelöscht. */
const VERSION = 'v1';
const CACHE = 'fresh-digital-' + VERSION;
const PRECACHE = [
  './',
  'index.html',
  'videos.js',
  'manifest.webmanifest',
  'fonts/inter-regular.woff',
  'fonts/inter-medium.woff',
  'fonts/inter-semibold.woff',
  'fonts/inter-bold.woff',
  'fonts/outfit-regular.woff',
  'fonts/outfit-bold.woff',
  'img/logo-fa-fresh.png',
  'img/ui/9f93b0480f.jpg',
  'fresh/fd-logo.webp',
  'fresh/fd-hg.webp',
  'fresh/fd-lege2.webp',
  'img/app/icon-192.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('fresh-digital-') && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const networkFirst = async req => {
  const cache = await caches.open(CACHE);
  try {
    // cache:'no-cache' = immer beim Server nachfragen (sonst liefert der Browser bis zu 10 Min. alte Kopien von GitHub Pages)
    const res = await fetch(req, { cache: 'no-cache' });
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch (err) {
    const hit = await cache.match(req, { ignoreSearch: req.mode === 'navigate' });
    if (hit) return hit;
    if (req.mode === 'navigate') {
      const shell = await cache.match('index.html');
      if (shell) return shell;
    }
    throw err;
  }
};

const staleWhileRevalidate = async (req, e) => {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  const update = fetch(req).then(res => {
    if (res.ok) cache.put(req, res.clone());
    return res;
  });
  if (hit) {
    e.waitUntil(update.catch(() => {}));
    return hit;
  }
  return update;
};

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate' || /\.(html|js|webmanifest|json|csv)$/.test(url.pathname) || url.pathname.endsWith('/')) {
    e.respondWith(networkFirst(req));
  } else if (/\.(webp|png|jpe?g|gif|svg|woff2?)$/.test(url.pathname)) {
    e.respondWith(staleWhileRevalidate(req, e));
  }
});
