const assets = ["/", "javascript.svg", "vite.svg", "style.css", "counter.js", "main.js", "sw-register.js", "favicon.ico", "icon-512.png"]

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("assets").then(cache => {
            cache.addAll(assets);
        })
    );
});


// State while revalidate strategy
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                // Even if the response is in the cache, we fetch it
                // and update the cache for future usage
                const fetchPromise = fetch(event.request).then(
                    networkResponse => {
                        caches.open("assets").then(cache => {
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        });
                    });
                // We use the currently cached version if it's there
                return cachedResponse || fetchPromise; // cached or a network fetch
            })
    );
}); 
