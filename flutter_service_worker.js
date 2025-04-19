'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9e2bc715762cfba2aa7614f8472d9607",
"assets/AssetManifest.bin.json": "77c0ee0d7d513db44be25a5b41a386df",
"assets/AssetManifest.json": "5031801500392a08892bc022522543c2",
"assets/assets/images/analytics.png": "610a95aedc2c0c32d1316562dc8ec248",
"assets/assets/images/appstore.png": "1debea839c0922a3768250fd5ee17a3b",
"assets/assets/images/background_ic_launcher.png": "c9477b1f1820f9acfb93eebb2e6679c2",
"assets/assets/images/brush-stroke.png": "41854d93cc2b183ac9bf55e4b5097846",
"assets/assets/images/coding.png": "af1b456dad3dd6f43f14994963b57316",
"assets/assets/images/doc.png": "b8eab3ad3088cccf73239831eb674cf1",
"assets/assets/images/email.png": "ce0b5923f1c86cdec05517c3a656a490",
"assets/assets/images/face.png": "3e569c0b44e18cf4ac36c2f52ca2c4fc",
"assets/assets/images/git.png": "7b08b14f30c2110a685bafcd33e8a480",
"assets/assets/images/googleplay.png": "2122cf20d11280ed5a5cde9c0124d9c4",
"assets/assets/images/icons8-whatsapp-500%2520(1).png": "1e21c90cd90449666069aa47f0fc79ed",
"assets/assets/images/ic_launcher.png": "88d73ca03285a2ac84ee396d50599e9a",
"assets/assets/images/in.png": "a65bf53ef6a1d1555120edfc1810f551",
"assets/assets/images/insta.png": "bd3f44e94e19e2cd2fed522e65f67657",
"assets/assets/images/pro1.png": "d9ac2e4e90eb579ad324251a4bee3375",
"assets/assets/images/pro2.png": "d9ac2e4e90eb579ad324251a4bee3375",
"assets/assets/images/share.png": "7d05af750cd03cdda7f247d7dc8b532e",
"assets/assets/images/twit.png": "3f2b027c50dd30dd9abeeaeb1b68b1c3",
"assets/assets/images/web.png": "f2e83ce0e9fb96ca60222ff0c490b02b",
"assets/assets/images/whatsapp.png": "bfc018faae614d1c20a7a56b26d45960",
"assets/assets/lottie/loading.json": "5a966e029959bd6e442da14359423730",
"assets/assets/lottie/nodata.json": "db2c399ec770ea6069001915c923274f",
"assets/assets/lottie/offline.json": "ee26c55ee71da5975ceda8488c0282e9",
"assets/assets/lottie/server.json": "df9177972f44a8c3973886df803270fa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ae64702cc114f021b5f206d44ce62259",
"assets/NOTICES": "26ddd913f063e4ba32d549b0a6bea309",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "e5f59ae1e682196be7ee7463d3c1a625",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "dd72ab7d00fae5de281374b53f6bbb6f",
"icons/Icon-192.png": "cee4eb1e48f7617afc79c90058738bd7",
"icons/Icon-512.png": "7dedadfb43efea181b06ed3a473f5457",
"icons/Icon-maskable-192.png": "cee4eb1e48f7617afc79c90058738bd7",
"icons/Icon-maskable-512.png": "7dedadfb43efea181b06ed3a473f5457",
"index.html": "c05240b778f26b9a42691784727a54e9",
"/": "c05240b778f26b9a42691784727a54e9",
"main.dart.js": "90748eb7c3c45e82e34bca90cac3d5e3",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"splash/img/branding-1x.png": "a553536bf4acdf42db321aacbeb31a3a",
"splash/img/branding-2x.png": "2efd601ce6c974878a771f33be1a6c4f",
"splash/img/branding-3x.png": "8e6b1b5fc5e4f7408494879628d815d2",
"splash/img/branding-4x.png": "45a23ce5aae4cd4a0829d0250b44d5ec",
"splash/img/branding-dark-1x.png": "a553536bf4acdf42db321aacbeb31a3a",
"splash/img/branding-dark-2x.png": "2efd601ce6c974878a771f33be1a6c4f",
"splash/img/branding-dark-3x.png": "8e6b1b5fc5e4f7408494879628d815d2",
"splash/img/branding-dark-4x.png": "45a23ce5aae4cd4a0829d0250b44d5ec",
"splash/img/dark-1x.png": "e2f57a05592d1faff2813c6870c7059f",
"splash/img/dark-2x.png": "1210189ddbaf22d1877fed86b833b0bf",
"splash/img/dark-3x.png": "5b4422b5697e664e5bfee17a8247305a",
"splash/img/dark-4x.png": "8e6f308afd5443ad9ebae224b1b554ec",
"splash/img/light-1x.png": "e2f57a05592d1faff2813c6870c7059f",
"splash/img/light-2x.png": "1210189ddbaf22d1877fed86b833b0bf",
"splash/img/light-3x.png": "5b4422b5697e664e5bfee17a8247305a",
"splash/img/light-4x.png": "8e6f308afd5443ad9ebae224b1b554ec",
"splash/img/light-background.png": "c9477b1f1820f9acfb93eebb2e6679c2",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
