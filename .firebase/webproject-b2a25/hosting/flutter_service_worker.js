'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9dd5437871f024cf39453afdea19ad8a",
"assets/AssetManifest.bin.json": "c0e51c66af035d82e677dc71ae45dd8c",
"assets/AssetManifest.json": "08c7f5ead6b612d883d2ff90e3c4305c",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/icons/facebook-2.svg": "48bf15d2057966765f384827997a2f41",
"assets/assets/icons/google-icon.svg": "38e282dafbaaf9823263d49349670447",
"assets/assets/icons/twitter.svg": "2186bb91925602b76e5a4384b2198c06",
"assets/assets/images/about%2520page.jpg": "6d290a3ace60fbe6e8f6ccd0a7decb97",
"assets/assets/images/banner.png": "ace218a4f4b81019717b67dffe6dfa45",
"assets/assets/images/big-sandwich-hamburger.jpg": "46a18d157c6bcb6443a5bb15f4d09d22",
"assets/assets/images/burger/1.jpg": "14637aafa5c40f8e04b64242f0a4bf68",
"assets/assets/images/burger/2.jpg": "1aab93a153073d688e61b4c0ed23b231",
"assets/assets/images/burger/3.jpg": "176d5b7df1b4f26778b2135391f63f97",
"assets/assets/images/burger/4.jpg": "4ccbb2168701fa3789ab89be6adcccbf",
"assets/assets/images/burger/5.jpg": "370194921ae64253e3a8f8b2d7bc1ebf",
"assets/assets/images/burger/6.jpg": "9d661491c253cd0cd70a63983dce7b50",
"assets/assets/images/burger/7.jpg": "3b2db41e7b9be3ebe09628bf2f0b2b55",
"assets/assets/images/chicken-pizza-with-bell-red-yellow-pepper.jpg": "041936cbf4d041a2852665440607d5b5",
"assets/assets/images/creditCards.png": "9bc1198ac661ddff944b4569a7398702",
"assets/assets/images/crispy-fish-nuggets-served.jpg": "c0ee07c35b62d680cad05f8319724969",
"assets/assets/images/cuisines/1.jpg": "7a838de2fb1460f891b4334237ac6cf9",
"assets/assets/images/cuisines/2.jpg": "f858502fd3f6fa71dba96c4764f3da8b",
"assets/assets/images/cuisines/3.jpg": "ea430c419da63c96358ba79c5a874b43",
"assets/assets/images/cuisines/4.jpeg": "0ed5222f88931f5ce43a13f4eb591595",
"assets/assets/images/cuisines/5.jpeg": "c11bae4b9bc28c6d9072beb39b7c81f2",
"assets/assets/images/cuisines/6.jpg": "63f483a296d2558e9836ee6523354861",
"assets/assets/images/delivery_boy.jpg": "0bebdbbd96334d0a5c0ef11a49b93301",
"assets/assets/images/drink/1.jpeg": "88e725c971a99b9c1497b641fdefb052",
"assets/assets/images/drink/2.jpg": "7aa2e21f28a715eb3af7d3810689f810",
"assets/assets/images/drink/3.jpeg": "d539e0846796714be1f798d24b7b4a53",
"assets/assets/images/drink/4.jpeg": "68bc895886967c691f15de4fe9890243",
"assets/assets/images/drink/5.jpeg": "30e0fc87fe284ba0de95387ba5fd2473",
"assets/assets/images/drink/6.jpeg": "034246c15067a3a8a9e173954af69c5f",
"assets/assets/images/fast_delivery.jpg": "ac251de765cd3efb130c3719148a8f43",
"assets/assets/images/four-boxes-nuggets-with-chicken-prawn-cheese-fish.jpg": "3d538761631b90461ba2fea153bc0b43",
"assets/assets/images/french-fries.jpg": "1a44fdb10997861eb14fe7ba19800344",
"assets/assets/images/login.png": "5d32bc2cb4000d864a83cfbaf10c17cf",
"assets/assets/images/menu.jpg": "0f36628dbd763bbe51180615a19614d0",
"assets/assets/images/menuheader.png": "810a3023f2f31b2d7501aa2606bef2cc",
"assets/assets/images/offer.jpg": "074db503d25a993279624603aa276272",
"assets/assets/images/online_odering.jpg": "264cd1fec1eb1a162bc25f3070f6dbba",
"assets/assets/images/pizza/1.jpeg": "ebbb1a7a0514c9c20c0b227a0f536c60",
"assets/assets/images/pizza/2.jpg": "48f824bd8e50ba53f6d228206699229e",
"assets/assets/images/pizza/3.jpg": "004c1403f14310e9c9c1a00fce565a89",
"assets/assets/images/pizza/4.jpg": "c76533ac35fb8f5c0ccef0fa4a8df05a",
"assets/assets/images/pizza/5.jpg": "6ca0e2fa72b27ce7c6ef6343d1a43259",
"assets/assets/images/pizza/6.jpg": "30ca2b64304317de0d1f0ea69947607a",
"assets/assets/images/shorteat/1.jpg": "855c2ca702c45e2a7173ce36ddaf4942",
"assets/assets/images/shorteat/2.jpg": "ef209b368efb6be437ae67a3ca1505ba",
"assets/assets/images/shorteat/3.jpg": "b1e49d10e051f2cfd853fcc2ae41e6bd",
"assets/assets/images/shorteat/4.jpg": "b337635639dd49dfdef2123532bdef06",
"assets/assets/images/shorteat/5.jpg": "dd119aa5e524d626d785e0ebcd7a5929",
"assets/assets/images/shorteat/6.jpg": "03e6f44febb4b9b5d77f4301bb8a7c48",
"assets/assets/images/shorteat/7.jpg": "6b369a448ca420b542e93d29ea0f5d06",
"assets/assets/images/shorteat/8.jpeg": "a48131b25688735a0ebbd03e2157ef08",
"assets/assets/images/specky-burger.jpg": "08c847beee0238883dd03d056b90289c",
"assets/assets/images/subscribe_banner.jpg": "88a265d84109063eb00c81f98359b822",
"assets/assets/images/what's%2520new%2520image/1.png": "0698e34b3f599d810a8fd1444391db8e",
"assets/assets/images/what's%2520new%2520image/2.png": "6a2c4bde35cfc13d4213237ca1096b69",
"assets/assets/images/what's%2520new%2520image/3.png": "8753a34a5ae898435f3b8c469eb5dda6",
"assets/assets/images/wide_variety.jpg": "5c1c986cb58d3bc1428ca55436a8709b",
"assets/FontManifest.json": "1a726564c73eb44d252c69c6eb91fd93",
"assets/fonts/MaterialIcons-Regular.otf": "c81d4de9f318c156d7d7c56ded6bffc8",
"assets/NOTICES": "7ec08eed13c9a64dafa06abb9ec6bc1e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "318355864d15fa2c6f3cd12d1e681cfc",
"/": "318355864d15fa2c6f3cd12d1e681cfc",
"main.dart.js": "4c92157994eeaf0a84c0b91b6cc4c111",
"manifest.json": "c762e892eda68cc33bc9310967994e98",
"version.json": "0c72343e7f3986c14034706b11b1aa71"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
