"use strict";
var $__hoek__;
var Hoek = ($__hoek__ = require("hoek"), $__hoek__ && $__hoek__.__esModule && $__hoek__ || {default: $__hoek__}).default;
exports.register = function(server, options, next) {
  options = Hoek.applyToDefaults({basePath: ''}, options);
  server.route({
    method: 'GET',
    path: options.basePath + '/',
    handler: function(request, reply) {
      reply({message: 'Welcome to the Node JS HAPI Seed with ES6 Support'});
    }
  });
  next();
};
exports.register.attributes = {name: 'api'};
