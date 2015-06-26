'use strict';
var api = require('traceur/src/node/api.js');

var options = {
    // ensure the source map works
     sourceMaps: 'inline',
     annotations: true
   };

module.exports = [
    {
        ext: '.js',
        transform: function (content, filename) {

            // Make sure to only transform your code or the dependencies you want
            if (filename.indexOf('src') >= 0) {
              //console.log('about transform this.', filename);
                var result = api.compile(content, options, filename);
                //console.log(result);
                return result
            }

            return content;
        }
    }
];
