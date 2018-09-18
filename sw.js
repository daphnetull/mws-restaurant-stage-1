/**
 *  Caching all of the pages using a listener for the install event.  
**/

self.addEventListener('install', function(event){
  const cachedUrls = [  // storing all of the page and resource file names into an array
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/main.js',
    '/js/dbhelper.js',
    '/js/restaurant_info.js'
  ];

  event.waitUntil( // once the installation is done, a promise is used to cache the URLs into the restaurant-reviews-v1 cache name
    caches.open('restaurant-reviews-v1').then(function(cache){
      return cache.addAll(cachedUrls);
      console.log('cached!');
    })

  )
})

/**
 *  fetch function is used to load the cached pages in offline mode
**/

self.addEventListener('fetch', function(event){
  // interrupting default fetch event and responding to the fetch event object 
  event.respondWith(
    // using a promise to determine if resource is already cached 
    // by comparing what's being requested to what's already cached
    caches.match(event.request).then(function(response){    
      // if resource already exists in cache, simply return it
      if (response) return response;
      // otherwise, continue default action of requesting resource from the network 
      return fetch(event.request);
    })
  );
});