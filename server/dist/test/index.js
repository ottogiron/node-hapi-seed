"use strict";
var Lab = require('lab');
var Code = require('code');
var Composer = require('../index');
var lab = exports.lab = Lab.script();
lab.experiment('App', function() {
  lab.test('it composes a server', function(done) {
    Composer(function(err, composedServer) {
      Code.expect(composedServer).to.be.an.object();
      done(err);
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0ZXN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBMYWIgPSByZXF1aXJlKCdsYWInKTtcbnZhciBDb2RlID0gcmVxdWlyZSgnY29kZScpO1xudmFyIENvbXBvc2VyID0gcmVxdWlyZSgnLi4vaW5kZXgnKTtcblxuXG52YXIgbGFiID0gZXhwb3J0cy5sYWIgPSBMYWIuc2NyaXB0KCk7XG5cblxubGFiLmV4cGVyaW1lbnQoJ0FwcCcsIGZ1bmN0aW9uICgpIHtcblxuICAgIGxhYi50ZXN0KCdpdCBjb21wb3NlcyBhIHNlcnZlcicsIGZ1bmN0aW9uIChkb25lKSB7XG5cbiAgICAgICAgQ29tcG9zZXIoZnVuY3Rpb24gKGVyciwgY29tcG9zZWRTZXJ2ZXIpIHtcblxuICAgICAgICAgICAgQ29kZS5leHBlY3QoY29tcG9zZWRTZXJ2ZXIpLnRvLmJlLmFuLm9iamVjdCgpO1xuXG4gICAgICAgICAgICBkb25lKGVycik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXSwiZmlsZSI6InRlc3QvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==