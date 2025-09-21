const CACHE_NAME = 'vop-admin-v1';
const urlsToCache = [
  '/admin',
  '/logo-vop.jpg',
  '/images/founder/photo_andj_ceo.jpg',
  '/images/activities/',
  '/images/boutique/',
  '/images/logos/',
  '/manifest.json',
  '/admin-manifest.json'
];

// Installation du service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activation du service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interception des requêtes
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retourner la réponse du cache si elle existe
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

// Gestion des notifications push
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'Nouvelle notification VOP Admin',
    icon: '/logo-vop.jpg',
    badge: '/logo-vop.jpg',
    vibrate: [100, 50, 100],
    sound: '/sounds/notification.mp3',
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Voir',
        icon: '/logo-vop.jpg'
      },
      {
        action: 'close',
        title: 'Fermer',
        icon: '/logo-vop.jpg'
      }
    ],
    requireInteraction: true, // Garde la notification visible
    silent: false // Active le son
  };

  event.waitUntil(
    self.registration.showNotification('VOP Admin', options)
  );
});

// Gestion des clics sur les notifications
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/admin')
    );
  }
});
