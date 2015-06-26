var Confidence = require('confidence');
var Config = require('./config');
import {Injector} from 'di';

var criteria = {
    env: process.env.NODE_ENV
};

var injector = new Injector();
var manifest = {
    $meta: 'This file defines the plot device.',
    server: {
        debug: {
            request: ['error']
        },
        connections: {
            routes: {
                security: true
            }
        }
    },
    connections: [{
        port: Config.get('/port/web'),
        labels: ['web']
    }],
    plugins: {
        './lib/routes': { paths: [Config.get('/routesLoaderPath')], injector: injector }
    }
};


var store = new Confidence.Store(manifest);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
