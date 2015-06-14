"use strict";
var Lab = require('lab');
var Code = require('code');
var Manifest = require('../manifest');
var lab = exports.lab = Lab.script();
lab.experiment('Manifest', function() {
  lab.test('it gets manifest data', function(done) {
    Code.expect(Manifest.get('/')).to.be.an.object();
    done();
  });
  lab.test('it gets manifest meta data', function(done) {
    Code.expect(Manifest.meta('/')).to.match(/this file defines the plot device/i);
    done();
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0ZXN0L21hbmlmZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBMYWIgPSByZXF1aXJlKCdsYWInKTtcbnZhciBDb2RlID0gcmVxdWlyZSgnY29kZScpO1xudmFyIE1hbmlmZXN0ID0gcmVxdWlyZSgnLi4vbWFuaWZlc3QnKTtcblxuXG52YXIgbGFiID0gZXhwb3J0cy5sYWIgPSBMYWIuc2NyaXB0KCk7XG5cblxubGFiLmV4cGVyaW1lbnQoJ01hbmlmZXN0JywgZnVuY3Rpb24gKCkge1xuXG4gICAgbGFiLnRlc3QoJ2l0IGdldHMgbWFuaWZlc3QgZGF0YScsIGZ1bmN0aW9uIChkb25lKSB7XG5cbiAgICAgICAgQ29kZS5leHBlY3QoTWFuaWZlc3QuZ2V0KCcvJykpLnRvLmJlLmFuLm9iamVjdCgpO1xuXG4gICAgICAgIGRvbmUoKTtcbiAgICB9KTtcblxuXG4gICAgbGFiLnRlc3QoJ2l0IGdldHMgbWFuaWZlc3QgbWV0YSBkYXRhJywgZnVuY3Rpb24gKGRvbmUpIHtcblxuICAgICAgICBDb2RlLmV4cGVjdChNYW5pZmVzdC5tZXRhKCcvJykpLnRvLm1hdGNoKC90aGlzIGZpbGUgZGVmaW5lcyB0aGUgcGxvdCBkZXZpY2UvaSk7XG5cbiAgICAgICAgZG9uZSgpO1xuICAgIH0pO1xufSk7XG4iXSwiZmlsZSI6InRlc3QvbWFuaWZlc3QuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==