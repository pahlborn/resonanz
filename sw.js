/* Resonanz — Offline-Vorrat.
   Eine Lehre aus dem Nachbarprojekt: Ein Gerät, auf dem schon ein Worker läuft,
   fragt sw.js kaum je neu ab. Was zählt, muss also hier robust sein und darf
   sich nicht auf eine neue Fassung des Workers verlassen. Deshalb: beim Holen
   zuerst aus dem Vorrat antworten, gleichzeitig im Hintergrund erneuern. */
const VORRAT = 'resonanz-v1-3';
const DATEIEN = [
  "./",
  "galerie.html",
  "index.html",
  "kab-funken.html",
  "kab-korn.html",
  "kab-schleife.html",
  "kab-sog.html",
  "kab-stimmen.html",
  "kab-stoss.html",
  "kab-strang.html",
  "kab-stroemung.html",
  "kab-tempo.html",
  "kab-verblassen-mittel.html",
  "kab-verblassen-sacht.html",
  "kab-verblassen-stark.html",
  "kab-wirbel.html",
  "kab-wurf.html",
  "kabinett.html",
  "manifest.webmanifest",
  "pult.html",
  "regal.html",
  "symbol-180.png",
  "symbol-192.png",
  "symbol-512.png",
  "versuch-a.html",
  "versuch-b.html",
  "versuch-c.html",
  "versuch-d.html",
  "versuch-e.html",
  "versuch-f.html",
  "versuch-g.html",
  "versuch-h.html",
  "versuch-i.html",
  "versuch-j.html",
  "versuch-k.html",
  "versuch-l.html",
  "versuch-m.html",
  "versuch-n.html",
  "versuch-o.html",
  "versuch-p.html",
  "versuch-q.html",
  "versuch-r.html"
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VORRAT)
      .then(c => Promise.all(DATEIEN.map(d =>
        fetch(d, { cache: 'reload' }).then(a => a.ok && c.put(d, a)).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(n => Promise.all(n.filter(k => k.startsWith('resonanz-') && k !== VORRAT)
                              .map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  if (u.origin !== self.location.origin) return;
  e.respondWith(
    caches.match(e.request).then(treffer => {
      const frisch = fetch(e.request).then(a => {
        if (a && a.ok) caches.open(VORRAT).then(c => c.put(e.request, a.clone()));
        return a;
      }).catch(() => treffer);
      return treffer || frisch;
    })
  );
});
