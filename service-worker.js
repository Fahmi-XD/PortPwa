// service-worker.js

importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/6.2.4/workbox-sw.js"
);

workbox.setConfig({ debug: true });

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || [], {
    ignoreURLParametersMatching: [/.*/],
    directoryIndex: null
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return (
                response ||
                fetch(e.request).catch(() => caches.match("/offline.html"))
            );
        })
    );
});
