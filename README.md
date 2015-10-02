# Node Hapi Seed

Node Hapi Seed is a Node.js project template which includes standard web project features such  build automation, routes, unit testing, Dockerbuild file, configuration management, and logging.

## Installation

```bash
git clone https://github.com/ottogiron/node-hapi-seed.git
mv node-hapi-seed <my-project-name>
git remote set-url origin <my-own-github-repository>
```

## Usage

### Run the server

**Dev env**

Uses <a href="https://github.com/remy/nodemon">nodemon</a> gulp task

```bash
cd <my-project-name>
npm  -g gulp
npm install
gulp serve
```

**Production/Other**

Runs server.js

```
npm install
npm start
```

### Unit testing

The project template uses <a href="https://github.com/hapijs/lab">Hapi Lab</a>. Check the test folder

**Runing tests**

```bash
npm test
```

### Routes

Routes are Hapi.js plugins. All the plugins under routes will be automatically loaded using hapi-plugins-loader.

```javascript

var Hoek = require('hoek');

exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            reply({ message: 'Welcome to the plot device.' });
        }
    });


    next();
};

exports.register.attributes = {
    name: 'api'
};
```

### Configuration Management

#### .env file

When running your server in dev enviroment (gulp serve), the project will try to load an .env file using
<a href="https://github.com/motdotla/dotenv" target="blank">Dotenv module</a>

You should have an .env file in the root of your project which will contain configuration variables that change across enviroments such, resource handles, services, data bases etc. Variables will be attached to process.env as normally happens with enviroment variables.

**note:**
If you don't create an .env file  when using gulp serve in your root directory you will see an error.


**example .env file**


APP_PORT=8080

DB_HOST=localhost

DB_USER=root

DB_PASS=s1mpl3


#### manifest.js

Contains the application configuration for the server(s).


#### config.js

Contains the application general configuration. If your configuration changes across enviroments you should use an enviroment variable in this file.


#### index.js

Initializes Hapi Glue which eventually will run the configured server(s).


#### server.js

Starts configured servers using Glue.


### Build automation

The project template uses <a href="http://gulpjs.com/">Gulp</a> for build automation. You can define tasks under the build/tasks folder, then you can run them from the command line e.g

```bash
gulp serve
```

### Dockerfile

Contains a Dockerfile to create a docker image from the project. You can edit the file if you need additional dependencies.

**Generating the docker image**
```bash
docker build -f docker/Dockerfile .
```

### Logging

TODO

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
## History

## Credits
Otto Giron
## License
MIT
