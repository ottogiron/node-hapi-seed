var Composer = require('./index');
import {Injector} from 'di';
import {IndexRoute} from './api/index';

Composer(function (err, server) {

    if (err) {
        throw err;
    }
    var injector = new Injector();
    var indexRoute = injector.get(IndexRoute);
    
    server.register({
    	register: indexRoute
    }, function(err){
    	server.start(function () {
       	console.log('Started the plot device on port ' + server.info.port);
    });
    });

    
});
