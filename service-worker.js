"use strict";var precacheConfig=[["/react-portfolio/index.html","fb981ca92ae4a1c6bdf91bac5dada41c"],["/react-portfolio/static/css/main.ef05645f.chunk.css","9a6f3b818cc5588cc69d7b995e9fc9b3"],["/react-portfolio/static/css/vendors.b4f13140.chunk.css","94ef1cbdf2fa2e8810ce451829464907"],["/react-portfolio/static/js/main.203c5ea6.chunk.js","98c5274d32866b8ccdf161fbef188b90"],["/react-portfolio/static/js/runtime~main.ccbd31dd.js","cb30b569d9f8e52d96336f7beb5f96c4"],["/react-portfolio/static/js/vendors.b079cc1e.chunk.js","50ebdc36ac4acd323ed64f12c03c8294"],["/react-portfolio/static/media/Garden Settings.372c9d6e.jpg","372c9d6ecbdb0be29d9b4b32ff805821"],["/react-portfolio/static/media/Jaz_photo.09e19a08.jpg","09e19a08ffc2d31b6ee10a11508a50d5"],["/react-portfolio/static/media/chatbot.3a84b92c.jpg","3a84b92cc00203198616a111834d1cc2"],["/react-portfolio/static/media/earth.67af05e1.jpg","67af05e12311bac06327b43ca31e166b"],["/react-portfolio/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/react-portfolio/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/react-portfolio/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/react-portfolio/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/react-portfolio/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/react-portfolio/static/media/garden_info.11c6cde8.jpg","11c6cde88d18eef8f36ffad16ba78e30"],["/react-portfolio/static/media/horter.b2e73c0b.png","b2e73c0be181df0e04e9f268b76d937c"],["/react-portfolio/static/media/ionicons.05acfdb5.woff","05acfdb568b3df49ad31355b19495d4a"],["/react-portfolio/static/media/ionicons.24712f6c.ttf","24712f6c47821394fba7942fbb52c3b2"],["/react-portfolio/static/media/ionicons.2c2ae068.eot","2c2ae068be3b089e0a5b59abb1831550"],["/react-portfolio/static/media/ionicons.621bd386.svg","621bd386841f74e0053cb8e67f8a0604"],["/react-portfolio/static/media/plant_search.29a8c3af.jpg","29a8c3af77e363c0ad6aef2a035fa214"],["/react-portfolio/static/media/profile.c8980756.jpg","c89807563fdcf64120d8bbe723c41ba7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});