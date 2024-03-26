'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "9676ca0ac22c5bd0d5f0bdde339c85b6",
"splash/img/light-2x.png": "f3014ae1eeb9fa9d1d7b315d1aac6e7c",
"splash/img/branding-4x.png": "45a23ce5aae4cd4a0829d0250b44d5ec",
"splash/img/dark-4x.png": "8e6f308afd5443ad9ebae224b1b554ec",
"splash/img/branding-dark-1x.png": "a553536bf4acdf42db321aacbeb31a3a",
"splash/img/light-3x.png": "1c830ca0ef4770a7072825d262963bf9",
"splash/img/dark-3x.png": "1c830ca0ef4770a7072825d262963bf9",
"splash/img/light-background.png": "c9477b1f1820f9acfb93eebb2e6679c2",
"splash/img/light-4x.png": "8e6f308afd5443ad9ebae224b1b554ec",
"splash/img/branding-2x.png": "2efd601ce6c974878a771f33be1a6c4f",
"splash/img/branding-3x.png": "8e6b1b5fc5e4f7408494879628d815d2",
"splash/img/dark-2x.png": "f3014ae1eeb9fa9d1d7b315d1aac6e7c",
"splash/img/dark-1x.png": "6c4ef46e17891f13c9936946fcf48533",
"splash/img/branding-dark-4x.png": "45a23ce5aae4cd4a0829d0250b44d5ec",
"splash/img/branding-1x.png": "a553536bf4acdf42db321aacbeb31a3a",
"splash/img/branding-dark-2x.png": "2efd601ce6c974878a771f33be1a6c4f",
"splash/img/light-1x.png": "6c4ef46e17891f13c9936946fcf48533",
"splash/img/branding-dark-3x.png": "8e6b1b5fc5e4f7408494879628d815d2",
"index.html": "2b20770a6ca5bc75f1a40c43af599a6e",
"/": "2b20770a6ca5bc75f1a40c43af599a6e",
"main.dart.js": "4b0271e7960d5dabe3b089e88bf3b9b9",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "e5f59ae1e682196be7ee7463d3c1a625",
"icons/Icon-192.png": "cee4eb1e48f7617afc79c90058738bd7",
"icons/Icon-maskable-192.png": "cee4eb1e48f7617afc79c90058738bd7",
"icons/Icon-maskable-512.png": "7dedadfb43efea181b06ed3a473f5457",
"icons/Icon-512.png": "7dedadfb43efea181b06ed3a473f5457",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"assets/AssetManifest.json": "3034eec21cc69195dccbefe9ae380a9b",
"assets/NOTICES": "064548d43b7ea219971470f5c7955f5a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "486e7de15af357a786cc3820590dcfc7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c2d2c61af07027e3a30062cf3a65faaa",
"assets/fonts/MaterialIcons-Regular.otf": "04698bc5c35710f7bb8104974ed6d723",
"assets/assets/images/email.png": "ce0b5923f1c86cdec05517c3a656a490",
"assets/assets/images/googleplay.png": "2122cf20d11280ed5a5cde9c0124d9c4",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/desktop.png": "ed78adc5288b847314ecc18f5497579e",
"assets/assets/images/embedded.png": "45df7794a38d1f1371438bbc8c926283",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/package.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/doc.png": "b8eab3ad3088cccf73239831eb674cf1",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/linux.png": "4e3629d8969cfa4eddcb5c154ca060d3",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/mac.png": "725a97940f9a5762aae21bcece0eff57",
"assets/assets/images/appstore.png": "1debea839c0922a3768250fd5ee17a3b",
"assets/assets/images/background_ic_launcher.png": "c9477b1f1820f9acfb93eebb2e6679c2",
"assets/assets/images/pro2.png": "d9ac2e4e90eb579ad324251a4bee3375",
"assets/assets/images/pro1.png": "d9ac2e4e90eb579ad324251a4bee3375",
"assets/assets/images/ic_launcher.png": "88d73ca03285a2ac84ee396d50599e9a",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/web.png": "f2e83ce0e9fb96ca60222ff0c490b02b",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/windows.png": "9603477d2547ee77c431be3e5811144c",
"assets/assets/images/backend.png": "815349f1b4f20781351714d2d76ca72b",
"assets/assets/images/whatsapp.png": "bfc018faae614d1c20a7a56b26d45960",
"assets/assets/images/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/images/icons8-whatsapp-500%2520(1).png": "1e21c90cd90449666069aa47f0fc79ed",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/lottie/server.json": "df9177972f44a8c3973886df803270fa",
"assets/assets/lottie/loading.json": "5a966e029959bd6e442da14359423730",
"assets/assets/lottie/nodata.json": "db2c399ec770ea6069001915c923274f",
"assets/assets/lottie/offline.json": "ee26c55ee71da5975ceda8488c0282e9",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
