
import Hoek from 'hoek';
import {Inject} from 'di';
import {TestService} from '../../services/test-service';


@Inject(TestService)
export default  class IndexRoute {

    constructor(testService) {
        this.testService = testService;
        this.register.attributes = {
            name: 'api0',
        }

        this.register.testService = testService;

    }

    register(server, options, next) {

        options = Hoek.applyToDefaults({ basePath: '' }, options);

        var testService = this.register.testService;

        server.route({
            method: 'GET',
            path: options.basePath + '/nestedcero',
            handler: function (request, reply) {

                reply({ message: testService.getMessage()});
            }
        });


        next();
    }
}
