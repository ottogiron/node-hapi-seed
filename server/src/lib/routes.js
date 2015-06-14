import Hoek from 'hoek';
import requireDir from 'require-dir';

exports.register = function (server, options, next) {

		var options = Hoek.applyToDefaults({ basePath: '' }, options);
		var paths = options.paths || [];
		var injector = options.injector;
		if(injector){
			for(var path of paths) {

			}
		}
};


exports.register.attributes = {
	name: 'routes'
};
