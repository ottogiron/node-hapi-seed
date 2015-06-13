"use strict";
var Tire = function() {
  function Tire() {}
  return ($traceurRuntime.createClass)(Tire, {roll: function() {
      console.log('rolling');
    }}, {});
}();
Object.defineProperties(module.exports, {
  Tire: {get: function() {
      return Tire;
    }},
  __esModule: {value: true}
});
