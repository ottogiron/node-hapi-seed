"use strict";
var TestService = function() {
  function TestService() {}
  return ($traceurRuntime.createClass)(TestService, {getMessage: function() {
      return 'Welcome to the Node JS HAPI Seed with ES6 Support from Test Service';
    }}, {});
}();
Object.defineProperties(module.exports, {
  TestService: {get: function() {
      return TestService;
    }},
  __esModule: {value: true}
});
