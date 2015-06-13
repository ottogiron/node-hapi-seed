"use strict";
var $__di__,
    $__api_47_index__;
var Composer = require('./index');
var Injector = ($__di__ = require("di"), $__di__ && $__di__.__esModule && $__di__ || {default: $__di__}).Injector;
var IndexRoute = ($__api_47_index__ = require("./api/index"), $__api_47_index__ && $__api_47_index__.__esModule && $__api_47_index__ || {default: $__api_47_index__}).IndexRoute;
Composer(function(err, server) {
  if (err) {
    throw err;
  }
  var injector = new Injector();
  var indexRoute = injector.get(IndexRoute);
  server.register({register: indexRoute}, function(err) {
    server.start(function() {
      console.log('Started the plot device on port ' + server.info.port);
    });
  });
});
