self.importScripts('./sw-patch.js')

self.addEventListener('install', function (event) {
  event.waitUntil(self.skipWaiting())
})

self.addEventListener('activate', function (event) {
  const expectedCacheNames = ['esm.sh']
  event.waitUntil(
    self.clients.claim().then(() =>
      caches.keys().then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (!expectedCacheNames.includes(cacheName)) {
              return caches.delete(cacheName)
            }
          })
        )
      })
    )
  )
})

self.addEventListener('fetch', function (event) {
  const url = event.request.url
  if (!url.startsWith('http') || event.request.method !== 'GET') return

  event.respondWith(
    (async function () {
      const cachedResponse = await caches.match(event.request)
      if (cachedResponse) return cachedResponse

      if (shouldPatchReact(url)) {
        return createScriptResponse(reactScript)
      }
      if (shoulePatchJsxRuntime(url)) {
        return createScriptResponse(jsxRuntimeScript)
      }
      if (shouldPatchReactDom(url)) {
        return createScriptResponse(reactDOMScript)
      }

      const networkResponse = await fetch(event.request)
      if (networkResponse.ok) {
        const clonedResponse = networkResponse.clone()
        if (/^https:\/\/(cdn.)?esm.sh\//.test(url)) {
          caches
            .open('esm.sh')
            .then((cache) => cache.put(event.request, clonedResponse))
        } else {
          caches
            .open('web')
            .then((cache) => cache.put(event.request, clonedResponse))
        }
      }
      return networkResponse
    })()
  )
})
