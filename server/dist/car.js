"use strict";
var $__tire__,
    $__di__;
var Tire = ($__tire__ = require("./tire"), $__tire__ && $__tire__.__esModule && $__tire__ || {default: $__tire__}).Tire;
var Inject = ($__di__ = require("di"), $__di__ && $__di__.__esModule && $__di__ || {default: $__di__}).Inject;
var Car = function() {
  function Car(tire) {
    this.tire = tire;
  }
  return ($traceurRuntime.createClass)(Car, {start: function() {
      this.tire.roll();
    }}, {});
}();
Object.defineProperty(Car, "annotations", {get: function() {
    return [new Inject(Tire)];
  }});
Object.defineProperties(module.exports, {
  Car: {get: function() {
      return Car;
    }},
  __esModule: {value: true}
});
