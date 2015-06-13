
import Hoek from 'hoek';

export class IndexRoute {

    constructor() {
        this.register.attributes = {
            name: 'api'
        }
    }
    
    register(server, options, next) {

        options = Hoek.applyToDefaults({ basePath: '' }, options);


        server.route({
            method: 'GET',
            path: options.basePath + '/',
            handler: function (request, reply) {

                reply({ message: 'Welcome to the Node JS HAPI Seed with ES6 Support' });
            }
        });


        next();
    }
}