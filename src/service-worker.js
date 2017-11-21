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
