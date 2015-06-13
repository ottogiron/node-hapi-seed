import Hoek from 'hoek';

export class BaseRoute {
	
	constructor() {
		this.register.attributes = {};
		this.routes = [];
	}

	register(server, options, next) {
		var options = Hoek.applyToDefaults({ basePath: '' }, options);
	    server.route(this.routes);
	}
}