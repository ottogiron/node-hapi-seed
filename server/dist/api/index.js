"use strict";
var $__hoek__;
var Hoek = ($__hoek__ = require("hoek"), $__hoek__ && $__hoek__.__esModule && $__hoek__ || {default: $__hoek__}).default;
var IndexRoute = function() {
  function IndexRoute() {
    this.register.attributes = {name: 'api'};
  }
  return ($traceurRuntime.createClass)(IndexRoute, {register: function(server, options, next) {
      options = Hoek.applyToDefaults({basePath: ''}, options);
      server.route({
        method: 'GET',
        path: options.basePath + '/',
        handler: function(request, reply) {
          reply({message: 'Welcome to the Node JS HAPI Seed with ES6 Support'});
        }
      });
      next();
    }}, {});
}();
var $__default = IndexRoute;
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcGkvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgSG9layBmcm9tICdob2VrJztcblxuZXhwb3J0IGRlZmF1bHQgIGNsYXNzIEluZGV4Um91dGUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIuYXR0cmlidXRlcyA9IHtcbiAgICAgICAgICAgIG5hbWU6ICdhcGknXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlcihzZXJ2ZXIsIG9wdGlvbnMsIG5leHQpIHtcblxuICAgICAgICBvcHRpb25zID0gSG9lay5hcHBseVRvRGVmYXVsdHMoeyBiYXNlUGF0aDogJycgfSwgb3B0aW9ucyk7XG5cblxuICAgICAgICBzZXJ2ZXIucm91dGUoe1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHBhdGg6IG9wdGlvbnMuYmFzZVBhdGggKyAnLycsXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAocmVxdWVzdCwgcmVwbHkpIHtcblxuICAgICAgICAgICAgICAgIHJlcGx5KHsgbWVzc2FnZTogJ1dlbGNvbWUgdG8gdGhlIE5vZGUgSlMgSEFQSSBTZWVkIHdpdGggRVM2IFN1cHBvcnQnIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIG5leHQoKTtcbiAgICB9XG59XG4iXSwiZmlsZSI6ImFwaS9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9