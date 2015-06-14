"use strict";
var Confidence = require('confidence');
var Config = require('./config');
var criteria = {env: process.env.NODE_ENV};
var manifest = {
  $meta: 'This file defines the plot device.',
  server: {
    debug: {request: ['error']},
    connections: {routes: {security: true}}
  },
  connections: [{
    port: Config.get('/port/web'),
    labels: ['web']
  }],
  plugins: {}
};
var store = new Confidence.Store(manifest);
exports.get = function(key) {
  return store.get(key, criteria);
};
exports.meta = function(key) {
  return store.meta(key, criteria);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYW5pZmVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQ29uZmlkZW5jZSA9IHJlcXVpcmUoJ2NvbmZpZGVuY2UnKTtcbnZhciBDb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZycpO1xuXG5cbnZhciBjcml0ZXJpYSA9IHtcbiAgICBlbnY6IHByb2Nlc3MuZW52Lk5PREVfRU5WXG59O1xuXG5cbnZhciBtYW5pZmVzdCA9IHtcbiAgICAkbWV0YTogJ1RoaXMgZmlsZSBkZWZpbmVzIHRoZSBwbG90IGRldmljZS4nLFxuICAgIHNlcnZlcjoge1xuICAgICAgICBkZWJ1Zzoge1xuICAgICAgICAgICAgcmVxdWVzdDogWydlcnJvciddXG4gICAgICAgIH0sXG4gICAgICAgIGNvbm5lY3Rpb25zOiB7XG4gICAgICAgICAgICByb3V0ZXM6IHtcbiAgICAgICAgICAgICAgICBzZWN1cml0eTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb25uZWN0aW9uczogW3tcbiAgICAgICAgcG9ydDogQ29uZmlnLmdldCgnL3BvcnQvd2ViJyksXG4gICAgICAgIGxhYmVsczogWyd3ZWInXVxuICAgIH1dLFxuICAgIHBsdWdpbnM6IHsgICAgIFxuICAgICAgICAvLycuL2FwaS9pbmRleCc6IHsgYmFzZVBhdGg6ICcvYXBpJyB9XG4gICAgfVxufTtcblxuXG52YXIgc3RvcmUgPSBuZXcgQ29uZmlkZW5jZS5TdG9yZShtYW5pZmVzdCk7XG5cblxuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG5cbiAgICByZXR1cm4gc3RvcmUuZ2V0KGtleSwgY3JpdGVyaWEpO1xufTtcblxuXG5leHBvcnRzLm1ldGEgPSBmdW5jdGlvbiAoa2V5KSB7XG5cbiAgICByZXR1cm4gc3RvcmUubWV0YShrZXksIGNyaXRlcmlhKTtcbn07XG4iXSwiZmlsZSI6Im1hbmlmZXN0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=