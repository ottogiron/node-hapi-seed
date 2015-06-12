'use strict';

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _hoek = require('hoek');

var Hoek = _interopRequireWildcard(_hoek);

var _helloWorld = require('../hello-world');

exports.register = function (server, options, next) {

    options = Hoek.applyToDefaults({ basePath: '' }, options);

    server.route({
        method: 'GET',
        path: options.basePath + '/',
        handler: function handler(request, reply) {

            reply({ message: 'Welcome to the Node JS HAPI Seed with ES6 Support' });
        }
    });

    next();
};

exports.register.attributes = {
    name: 'api'
};