var Confidence = require('confidence');

var config = {
    $meta: 'This file configures the plot device.',
    projectName: 'node-hapi-seed',
    port: {
        web: process.env.APP_PORT || 8080
    }
};

var store = new Confidence.Store(config);


exports.get = function (key) {

    return store.get(key);
};


exports.meta = function (key) {

    return store.meta(key);
};
