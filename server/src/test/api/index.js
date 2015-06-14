require('di/node_modules/traceur/bin/traceur-runtime');
var Lab = require('lab');
var Code = require('code');
var Config = require('../../config');
var Hapi = require('hapi');

import IndexPlugin from '../../api/index';
import {Injector} from 'di';


var lab = exports.lab = Lab.script();
var request, server;


lab.beforeEach(function (done) {

    var injector = new Injector();

    var plugins = [ injector.get(IndexPlugin) ];
    server = new Hapi.Server();
    server.connection({ port: Config.get('/port/web') });
    server.register(plugins, function (err) {

        if (err) {
            return done(err);
        }

        done();
    });
});


lab.experiment('Index Plugin', function () {

    lab.beforeEach(function (done) {

        request = {
            method: 'GET',
            url: '/'
        };

        done();
    });


    lab.test('it returns the default message', function (done) {

        server.inject(request, function (response) {

            Code.expect(response.result.message).to.match(/Welcome to the Node JS HAPI Seed with ES6 Support/i);
            Code.expect(response.statusCode).to.equal(200);

            done();
        });
    });
});
