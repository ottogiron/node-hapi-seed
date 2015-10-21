'use strict'
var Hoek = require("hoek");
var requireDir = require('require-dir');


var internals = {};
var defaultOptions = {};

internals.settings = {};

internals.runThroughPlugins = function (pluginsPaths, options, server) {

    if (pluginsPaths) {
        if (pluginsPaths.register) {
            var name = pluginsPaths.register.attributes.name;
            var pluginOptions = {};
            if (options.pluginOptions) {
                if (options.pluginOptions[name]) {
                    pluginOptions = options.pluginOptions[name];
                }
            }
            internals.registerPlugin(pluginsPaths, pluginOptions, server);
        } else {
            Object.keys(pluginsPaths).forEach( function (key) {

                var nextPlugin = pluginsPaths[key];
                internals.runThroughPlugins(nextPlugin, options, server);
            });
        }
    }
};

internals.registerPlugin = function (plugin, options, server) {

    server.register({
        register: plugin,
        options: options
    }, function (err) {
    });
};

exports.register = function (server, options, next) {

    internals.settings = Hoek.applyToDefaults(defaultOptions, options);
    for(var path of options.paths) {
        var plugins = requireDir(path, {recurse: true});
        internals.runThroughPlugins(plugins, internals.settings, server);
    }
    next();
};

exports.register.attributes = {
    name: 'plugins-loader'
};
