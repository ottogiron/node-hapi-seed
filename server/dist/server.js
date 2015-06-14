"use strict";
var $__di__,
    $__routes_47_api_47_index__;
var Composer = require('./index');
var Injector = ($__di__ = require("di"), $__di__ && $__di__.__esModule && $__di__ || {default: $__di__}).Injector;
var IndexRoute = ($__routes_47_api_47_index__ = require("./routes/api/index"), $__routes_47_api_47_index__ && $__routes_47_api_47_index__.__esModule && $__routes_47_api_47_index__ || {default: $__routes_47_api_47_index__}).default;
Composer(function(err, server) {
  if (err) {
    throw err;
  }
  var injector = new Injector();
  var indexRoute = injector.get(IndexRoute);
  server.register({register: indexRoute}, function(err) {
    server.start(function() {
      console.log('Started the plot device on port ' + server.info.port);
    });
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbXBvc2VyID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnZGknO1xuaW1wb3J0IEluZGV4Um91dGUgZnJvbSAnLi9yb3V0ZXMvYXBpL2luZGV4JztcblxuQ29tcG9zZXIoZnVuY3Rpb24gKGVyciwgc2VydmVyKSB7XG5cbiAgICBpZiAoZXJyKSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9XG4gICAgdmFyIGluamVjdG9yID0gbmV3IEluamVjdG9yKCk7XG4gICAgdmFyIGluZGV4Um91dGUgPSBpbmplY3Rvci5nZXQoSW5kZXhSb3V0ZSk7XG5cbiAgICBzZXJ2ZXIucmVnaXN0ZXIoe1xuICAgIFx0cmVnaXN0ZXI6IGluZGV4Um91dGVcbiAgICB9LCBmdW5jdGlvbihlcnIpe1xuICAgIFx0c2VydmVyLnN0YXJ0KGZ1bmN0aW9uICgpIHtcbiAgICAgICBcdGNvbnNvbGUubG9nKCdTdGFydGVkIHRoZSBwbG90IGRldmljZSBvbiBwb3J0ICcgKyBzZXJ2ZXIuaW5mby5wb3J0KTtcbiAgICB9KTtcbiAgICB9KTtcblxuXG59KTtcbiJdLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=