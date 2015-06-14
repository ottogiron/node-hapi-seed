"use strict";
var Confidence = require('confidence');
var criteria = {env: process.env.NODE_ENV};
var config = {
  $meta: 'This file configures the plot device.',
  projectName: 'node-hapi-seed',
  port: {web: {
      $filter: 'env',
      test: 9090,
      $default: 8080
    }}
};
var store = new Confidence.Store(config);
exports.get = function(key) {
  return store.get(key, criteria);
};
exports.meta = function(key) {
  return store.meta(key, criteria);
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbmZpZGVuY2UgPSByZXF1aXJlKCdjb25maWRlbmNlJyk7XG5cblxudmFyIGNyaXRlcmlhID0ge1xuICAgIGVudjogcHJvY2Vzcy5lbnYuTk9ERV9FTlZcbn07XG5cblxudmFyIGNvbmZpZyA9IHtcbiAgICAkbWV0YTogJ1RoaXMgZmlsZSBjb25maWd1cmVzIHRoZSBwbG90IGRldmljZS4nLFxuICAgIHByb2plY3ROYW1lOiAnbm9kZS1oYXBpLXNlZWQnLFxuICAgIHBvcnQ6IHtcbiAgICAgICAgd2ViOiB7XG4gICAgICAgICAgICAkZmlsdGVyOiAnZW52JyxcbiAgICAgICAgICAgIHRlc3Q6IDkwOTAsXG4gICAgICAgICAgICAkZGVmYXVsdDogODA4MFxuICAgICAgICB9XG4gICAgfVxufTtcblxuXG52YXIgc3RvcmUgPSBuZXcgQ29uZmlkZW5jZS5TdG9yZShjb25maWcpO1xuXG5cbmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuXG4gICAgcmV0dXJuIHN0b3JlLmdldChrZXksIGNyaXRlcmlhKTtcbn07XG5cblxuZXhwb3J0cy5tZXRhID0gZnVuY3Rpb24gKGtleSkge1xuXG4gICAgcmV0dXJuIHN0b3JlLm1ldGEoa2V5LCBjcml0ZXJpYSk7XG59O1xuIl0sImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==