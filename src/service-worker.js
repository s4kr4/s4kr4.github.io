const version = '1.0.0'
const CACHE = version + '::PWAsite'
const installFilesEssential = [
  '/',
  '/manifest.json',
  '/public/bundle.js'
]

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE)
      .then(function (cache) {
        return cache.addAll(installFilesEssential)
      })
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request)
    .then(function (response) {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})
