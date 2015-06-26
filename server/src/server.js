var Composer = require('./index');
require('source-map-support').install();
Composer(function (err, server) {

    if (err) {
        throw err;
    }

    server.start(function () {
       console.log('Started the plot device on port ' + server.info.port);
     });

});
