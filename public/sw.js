const CACHE_NAME = 'giftwave-v10-FORCE';

self.addEventListener('install', (event) => {
  // Форсируем активацию нового SW немедленно
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Удаляем вообще ВСЕ старые кэши
          console.log('Deleting old cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      console.log('All caches cleared, claiming clients...');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Полностью отключаем кэширование для авторизации и базы
  if (event.request.url.includes('googleapis') || event.request.url.includes('firebase')) {
    return;
  }
  
  event.respondWith(fetch(event.request));
});
