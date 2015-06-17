import Hoek from 'hoek';
import requireDir from 'require-dir';
import npath from 'path';
import {Injector} from 'di';

exports.register = function (server, options, next) {
	  var injector = new Injector();
		var options = Hoek.applyToDefaults({ }, options);

		if(injector){
			for(let path of options.paths) {
				let absolutePath = npath.resolve(path);
				let services = requireDir(absolutePath, {recurse: true});
				var route = injector.get(services.api.index.default);

				server.register({
					register: route
				}, function(err){
				
				 });
			}
		}
};


exports.register.attributes = {
	name: 'routes'
};
