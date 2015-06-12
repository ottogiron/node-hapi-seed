'use strict';

var Hoek = require('hoek');

exports.register = function (server, options, next) {

    options = Hoek.applyToDefaults({ basePath: '' }, options);

    server.route({
        method: 'GET',
        path: options.basePath + '/',
        handler: function handler(request, reply) {

            reply({ message: 'Welcome to the plot device.' });
        }
    });

    next();
};

exports.register.attributes = {
    name: 'api'
};