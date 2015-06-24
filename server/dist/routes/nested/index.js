"use strict";
var $__hoek__,
    $__di__,
    $___46__46__47__46__46__47_services_47_test_45_service__;
var Hoek = ($__hoek__ = require("hoek"), $__hoek__ && $__hoek__.__esModule && $__hoek__ || {default: $__hoek__}).default;
var Inject = ($__di__ = require("di"), $__di__ && $__di__.__esModule && $__di__ || {default: $__di__}).Inject;
var TestService = ($___46__46__47__46__46__47_services_47_test_45_service__ = require("../../services/test-service"), $___46__46__47__46__46__47_services_47_test_45_service__ && $___46__46__47__46__46__47_services_47_test_45_service__.__esModule && $___46__46__47__46__46__47_services_47_test_45_service__ || {default: $___46__46__47__46__46__47_services_47_test_45_service__}).TestService;
var IndexRoute = function() {
  function IndexRoute(testService) {
    this.testService = testService;
    this.register.attributes = {name: 'api1'};
    this.register.testService = testService;
  }
  return ($traceurRuntime.createClass)(IndexRoute, {register: function(server, options, next) {
      options = Hoek.applyToDefaults({basePath: ''}, options);
      var testService = this.register.testService;
      server.route({
        method: 'GET',
        path: options.basePath + '/nestedone',
        handler: function(request, reply) {
          reply({message: testService.getMessage()});
        }
      });
      next();
    }}, {});
}();
var $__default = IndexRoute;
Object.defineProperty(IndexRoute, "annotations", {get: function() {
    return [new Inject(TestService)];
  }});
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
