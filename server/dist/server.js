"use strict";
var $__di__,
    $__api_47_index__;
var Composer = require('./index');
var Injector = ($__di__ = require("di"), $__di__ && $__di__.__esModule && $__di__ || {default: $__di__}).Injector;
var IndexRoute = ($__api_47_index__ = require("./api/index"), $__api_47_index__ && $__api_47_index__.__esModule && $__api_47_index__ || {default: $__api_47_index__}).IndexRoute;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIENvbXBvc2VyID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnZGknO1xuaW1wb3J0IHtJbmRleFJvdXRlfSBmcm9tICcuL2FwaS9pbmRleCc7XG5cbkNvbXBvc2VyKGZ1bmN0aW9uIChlcnIsIHNlcnZlcikge1xuXG4gICAgaWYgKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIHZhciBpbmplY3RvciA9IG5ldyBJbmplY3RvcigpO1xuICAgIHZhciBpbmRleFJvdXRlID0gaW5qZWN0b3IuZ2V0KEluZGV4Um91dGUpO1xuICAgIFxuICAgIHNlcnZlci5yZWdpc3Rlcih7XG4gICAgXHRyZWdpc3RlcjogaW5kZXhSb3V0ZVxuICAgIH0sIGZ1bmN0aW9uKGVycil7XG4gICAgXHRzZXJ2ZXIuc3RhcnQoZnVuY3Rpb24gKCkge1xuICAgICAgIFx0Y29uc29sZS5sb2coJ1N0YXJ0ZWQgdGhlIHBsb3QgZGV2aWNlIG9uIHBvcnQgJyArIHNlcnZlci5pbmZvLnBvcnQpO1xuICAgIH0pO1xuICAgIH0pO1xuXG4gICAgXG59KTtcbiJdLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=