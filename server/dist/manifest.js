"use strict";
var $__di__;
var Confidence = require('confidence');
var Config = require('./config');
var Injector = ($__di__ = require("di"), $__di__ && $__di__.__esModule && $__di__ || {default: $__di__}).Injector;
var criteria = {env: process.env.NODE_ENV};
var injector = new Injector();
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
  plugins: {'./lib/routes': {
      paths: ['dist/routes'],
      injector: injector
    }}
};
var store = new Confidence.Store(manifest);
exports.get = function(key) {
  return store.get(key, criteria);
};
exports.meta = function(key) {
  return store.meta(key, criteria);
};
