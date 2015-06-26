require('traceur/bin/traceur-runtime');
var Lab = require('lab');
var Code = require('code');
var Config = require('../../src/config');
var Hapi = require('hapi');

import IndexRoute from '../../src/routes/index';
import {Injector} from 'di';
var lab = exports.lab = Lab.script();
var request, server;


lab.beforeEach(function (done) {

    var injector = new Injector();
    var plugins = [ injector.get(IndexRoute) ];
    server = new Hapi.Server();
    server.connection({ port: Config.get('/port/web') });

    server.register(plugins, function (err) {

        if (err) {
            return done(err);
        }

        done();
    });
});


lab.experiment('Index Route', function () {

    lab.beforeEach(function (done) {

        request = {
            method: 'GET',
            url: '/'
        };

        done();
    });


    lab.test('it returns the default message', function (done) {

        server.inject(request, function (response) {

            Code.expect(response.result.message).to.match(/Welcome to the Node JS HAPI Seed with ES6 Support from Test Service/i);
            Code.expect(response.statusCode).to.equal(200);

            done();
        });
    });
});
