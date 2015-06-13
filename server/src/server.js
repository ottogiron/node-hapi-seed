var Composer = require('./index');

import {Injector} from 'di';
import {Car} from './car';

Composer(function (err, server) {

    if (err) {
        throw err;
    }

    server.start(function () {
   	
        var injector = new Injector();
        var car = injector.get(Car);
        car.start();
        console.log('Started the plot device on port ' + server.info.port);
    });
});
