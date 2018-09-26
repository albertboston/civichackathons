/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-396ea3766171f2b8b5b5.js"
  },
  {
    "url": "app-061b7cfbe676be905a5b.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-554b9a695eb29cca4f78.js"
  },
  {
    "url": "index.html",
    "revision": "c97d72d9656839316fb26399678d812f"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "c809d65305932232f457baa44bce76e2"
  },
  {
    "url": "3.52bdc545f943ee703ebd.css"
  },
  {
    "url": "1.660aa769f7586bce0e09.css"
  },
  {
    "url": "0.d8fff9af06820c945d5b.css"
  },
  {
    "url": "component---src-pages-index-jsx-83a54bfa694ab588bca3.js"
  },
  {
    "url": "2-00526d1da02b90743ca5.js"
  },
  {
    "url": "0-f3b3abf56a5f60fad1c5.js"
  },
  {
    "url": "3-6c619c28ad6d1bd0b7d3.js"
  },
  {
    "url": "1-29922189ab2a52282c49.js"
  },
  {
    "url": "static/d/808/path---index-6a9-VMoZdpyGpUcQ60s1qFLpkZqos.json",
    "revision": "5809093dc27548f5aa186404c7ebe801"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "d6cd83ec2c954f1c73d2549ebe2ce108"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});