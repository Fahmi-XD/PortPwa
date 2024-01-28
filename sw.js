const cacheName = 'portfolio-v2';
const preCache = [
    '/',
    '/index.html',
    '/js/main.js',
    '/js/navbar.js',
    '/js/home.js',
    '/js/gsap.js',
    '/js/navigasi.js',
    '/css/all.css',
    '/css/home.css',
    '/css/navbar.css',
    '/css/navigasi.css',
    '/images/hero.svg',
    '/images/logo.jpg'
];

self.addEventListener('install', e => {
    console.log('service worker installed');

    e.waitUntil(
        (async () => {
            const cache = await caches.open(cacheName);
            cache.addAll(preCache);
        })()
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName).then(cache => {
            return cache.match(event.request).then(response => {
                const fetchPromise = fetch(event.request).then(
                    networkResponse => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    }
                );
                return response || fetchPromise;
            });
        })
    );
});

/*
self.addEventListener('fetch', e => {
    e.respondWith(
        (async () => {
            const cache = await caches.open(cacheName);
            const resCache = await cache.match(e.request);
            if (resCache) return resCache;
            try {
                const res = await fetch(e.request);
                cache.put(e.request, res.clone());
                return res;
            } catch (error) {
                console.log(error);
            }
        })()
    );
});
*/

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNamesActive => {
            return Promise.all(
                cacheNamesActive.map(cacheNameVersion => {
                    if (cacheNameVersion !== cacheName) {
                        return caches.delete(cacheNameVersion);
                    }
                })
            );
        })
    );
});
