import Hoek from 'hoek';
import requireDir from 'require-dir';
import npath from 'path';
import {Injector} from 'di';

var extractRoutes = function(serviceObject, injector, server) {

	if(serviceObject) {
		if(serviceObject.default) {

			let route = injector.get(serviceObject.default);
			server.register({
				register: route
			}, function(err){

			 });
		}
		else {
			Object.keys(serviceObject).forEach(function(key){
				let posibleService = serviceObject[key];
				extractRoutes(posibleService, injector, server);
			});
		}
	}
};

exports.register = function (server, options, next) {
	  var injector = new Injector();
		var options = Hoek.applyToDefaults({ }, options);

		if(injector){
			for(let path of options.paths) {
				let absolutePath = npath.resolve(path);
				let services = requireDir(absolutePath, {recurse: true});

				extractRoutes(services, injector, server);

			}
		}
		next();
};


exports.register.attributes = {
	name: 'routes'
};
