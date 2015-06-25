"use strict";
var $___46__46__47__46__46__47_routes_47_index__,
    $__di__;
require('di/node_modules/traceur/bin/traceur-runtime');
var Lab = require('lab');
var Code = require('code');
var Config = require('../../config');
var Hapi = require('hapi');
var IndexRoute = ($___46__46__47__46__46__47_routes_47_index__ = require("../../routes/index"), $___46__46__47__46__46__47_routes_47_index__ && $___46__46__47__46__46__47_routes_47_index__.__esModule && $___46__46__47__46__46__47_routes_47_index__ || {default: $___46__46__47__46__46__47_routes_47_index__}).default;
var Injector = ($__di__ = require("di"), $__di__ && $__di__.__esModule && $__di__ || {default: $__di__}).Injector;
var lab = exports.lab = Lab.script();
var request,
    server;
lab.beforeEach(function(done) {
  var injector = new Injector();
  var plugins = [injector.get(IndexRoute)];
  server = new Hapi.Server();
  server.connection({port: Config.get('/port/web')});
  server.register(plugins, function(err) {
    if (err) {
      return done(err);
    }
    done();
  });
});
lab.experiment('Index Route', function() {
  lab.beforeEach(function(done) {
    request = {
      method: 'GET',
      url: '/'
    };
    done();
  });
  lab.test('it returns the default message', function(done) {
    server.inject(request, function(response) {
      Code.expect(response.result.message).to.match(/Welcome to the Node JS HAPI Seed with ES6 Support from Test Service/i);
      Code.expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
