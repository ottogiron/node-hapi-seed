"use strict";
var $__hoek__;
var Hoek = ($__hoek__ = require("hoek"), $__hoek__ && $__hoek__.__esModule && $__hoek__ || {default: $__hoek__}).default;
var IndexRoute = function() {
  function IndexRoute() {
    this.register.attributes = {name: 'api'};
  }
  return ($traceurRuntime.createClass)(IndexRoute, {register: function(server, options, next) {
      options = Hoek.applyToDefaults({basePath: ''}, options);
      server.route({
        method: 'GET',
        path: options.basePath + '/',
        handler: function(request, reply) {
          reply({message: 'Welcome to the Node JS HAPI Seed with ES6 Support'});
        }
      });
      next();
    }}, {});
}();
Object.defineProperties(module.exports, {
  IndexRoute: {get: function() {
      return IndexRoute;
    }},
  __esModule: {value: true}
});
