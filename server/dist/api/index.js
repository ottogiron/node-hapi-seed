"use strict";
var Hoek = require('hoek');
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
