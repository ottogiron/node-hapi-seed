"use strict";
'use strict';
var Babel = require('babel-core');
module.exports = [{
  ext: '.js',
  transform: function(content, filename) {
    if (filename.indexOf('dist') >= 0) {
      var result = Babel.transform(content, {
        sourceMap: 'inline',
        filename: filename,
        sourceFileName: filename
      });
      return result.code;
    }
    return content;
  }
}];
