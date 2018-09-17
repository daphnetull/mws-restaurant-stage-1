self.addEventListener('install', function(event){
  const cachedUrls = [
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

  event.waitUntil(
  	caches.open('restaurant-reviews-v1').then(function(cache){
  		console.log('cached!');
  		return cache.addAll(cachedUrls);

  	})

  )
}) 