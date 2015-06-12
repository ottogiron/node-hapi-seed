'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _tire = require('./tire');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var Car = (function () {
  function Car(tire) {
    _classCallCheck(this, _Car);

    this.tire = tire;
  }

  var _Car = Car;

  _createClass(_Car, [{
    key: 'start',
    value: function start() {
      this.tire.roll();
    }
  }]);

  Car = (0, _aureliaDependencyInjection.inject)(_tire.Tire)(Car) || Car;
  return Car;
})();

exports.Car = Car;