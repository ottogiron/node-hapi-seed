"use strict";
var $__di__,
    $__car__;
var Composer = require('./index');
var Injector = ($__di__ = require("di"), $__di__ && $__di__.__esModule && $__di__ || {default: $__di__}).Injector;
var Car = ($__car__ = require("./car"), $__car__ && $__car__.__esModule && $__car__ || {default: $__car__}).Car;
Composer(function(err, server) {
  if (err) {
    throw err;
  }
  server.start(function() {
    var injector = new Injector();
    var car = injector.get(Car);
    car.start();
    console.log('Started the plot device on port ' + server.info.port);
  });
});
