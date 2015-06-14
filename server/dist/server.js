"use strict";
var $__di__,
    $__routes_47_api_47_index__;
var Composer = require('./index');
var Injector = ($__di__ = require("di"), $__di__ && $__di__.__esModule && $__di__ || {default: $__di__}).Injector;
var IndexRoute = ($__routes_47_api_47_index__ = require("./routes/api/index"), $__routes_47_api_47_index__ && $__routes_47_api_47_index__.__esModule && $__routes_47_api_47_index__ || {default: $__routes_47_api_47_index__}).default;
Composer(function(err, server) {
  if (err) {
    throw err;
  }
  var injector = new Injector();
  var indexRoute = injector.get(IndexRoute);
  server.register({
    register: indexRoute,
    options: {basePath: '/api'}
  }, function(err) {
    server.start(function() {
      console.log('Started the plot device on port ' + server.info.port);
    });
  });
});
