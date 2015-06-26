"use strict";
var $__hoek__,
    $__di__,
    $___46__46__47_services_47_test_45_service__;
var Hoek = ($__hoek__ = require("hoek"), $__hoek__ && $__hoek__.__esModule && $__hoek__ || {default: $__hoek__}).default;
var Inject = ($__di__ = require("di"), $__di__ && $__di__.__esModule && $__di__ || {default: $__di__}).Inject;
var TestService = ($___46__46__47_services_47_test_45_service__ = require("../services/test-service"), $___46__46__47_services_47_test_45_service__ && $___46__46__47_services_47_test_45_service__.__esModule && $___46__46__47_services_47_test_45_service__ || {default: $___46__46__47_services_47_test_45_service__}).TestService;
var IndexRoute = function() {
  function IndexRoute(testService) {
    this.testService = testService;
    this.register.attributes = {name: 'api'};
    this.register.testService = testService;
  }
  return ($traceurRuntime.createClass)(IndexRoute, {register: function(server, options, next) {
      options = Hoek.applyToDefaults({basePath: ''}, options);
      var testService = this.register.testService;
      server.route({
        method: 'GET',
        path: options.basePath + '/',
        handler: function(request, reply) {
          reply({message: testService.getMessage()});
        }
      });
      next();
    }}, {});
}();
var $__default = IndexRoute;
Object.defineProperty(IndexRoute, "annotations", {get: function() {
    return [new Inject(TestService)];
  }});
Object.defineProperties(module.exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzs7O0VBQU8sS0FBRyxFQURWLEVBQUMsV0FBb0IsQ0FBQSxPQUFNLEFBQUMsUUFBa0IsQ0FDdEMsQ0FBQSxZQUFxQixxQkFBMkIsQ0FBQSxZQUFxQixHQUFLLEVBQUMsT0FBTSxXQUFtQixDQUFDLEFBRC9ELENBQ2dFO0VBQ3RHLE9BQUssRUFGYixFQUFDLFNBQW9CLENBQUEsT0FBTSxBQUFDLE1BQWtCLENBQ3RDLENBQUEsVUFBcUIsbUJBQTJCLENBQUEsVUFBcUIsR0FBSyxFQUFDLE9BQU0sU0FBbUIsQ0FBQyxBQUQvRCxDQUNnRTtFQUV0RyxZQUFVLEVBSGxCLEVBQUMsOENBQW9CLENBQUEsT0FBTSxBQUFDLDRCQUFrQixDQUN0QyxDQUFBLCtDQUFxQix3REFBMkIsQ0FBQSwrQ0FBcUIsR0FBSyxFQUFDLE9BQU0sOENBQW1CLENBQUMsQUFEL0QsQ0FDZ0U7RUFLeEYsV0FBUyxFQU4vQixDQUFBLFNBQVMsQUFBRDtBQU1RLFNBQU0sV0FBUyxDQUVmLFdBQVUsQ0FBRztBQUNyQixPQUFHLFlBQVksRUFBSSxZQUFVLENBQUM7QUFDOUIsT0FBRyxTQUFTLFdBQVcsRUFBSSxFQUN2QixJQUFHLENBQUcsTUFBSSxDQUNkLENBQUE7QUFFQSxPQUFHLFNBQVMsWUFBWSxFQUFJLFlBQVUsQ0FBQztFQUUzQztBQW9CSixBQWxDVSxPQUFPLENBQUEsQ0FBQyxlQUFjLFlBQVksQ0FBQyxBQUFDLGNBZ0IxQyxRQUFPLENBQVAsVUFBUyxNQUFLLENBQUcsQ0FBQSxPQUFNLENBQUcsQ0FBQSxJQUFHLENBQUc7QUFFNUIsWUFBTSxFQUFJLENBQUEsSUFBRyxnQkFBZ0IsQUFBQyxDQUFDLENBQUUsUUFBTyxDQUFHLEdBQUMsQ0FBRSxDQUFHLFFBQU0sQ0FBQyxDQUFDO0FBRXpELEFBQUksUUFBQSxDQUFBLFdBQVUsRUFBSSxDQUFBLElBQUcsU0FBUyxZQUFZLENBQUM7QUFFM0MsV0FBSyxNQUFNLEFBQUMsQ0FBQztBQUNULGFBQUssQ0FBRyxNQUFJO0FBQ1osV0FBRyxDQUFHLENBQUEsT0FBTSxTQUFTLEVBQUksSUFBRTtBQUMzQixjQUFNLENBQUcsVUFBVSxPQUFNLENBQUcsQ0FBQSxLQUFJLENBQUc7QUFFL0IsY0FBSSxBQUFDLENBQUMsQ0FBRSxPQUFNLENBQUcsQ0FBQSxXQUFVLFdBQVcsQUFBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DO0FBQUEsTUFDSixDQUFDLENBQUM7QUFHRixTQUFHLEFBQUMsRUFBQyxDQUFDO0lBQ1YsTUFoQzRELENBQUM7QUFDekQsQUFBQyxFQUFDO0FBSlYsQUFBSSxFQUFBLENBQUEsVUFBUyxhQUFvQixDQUFBO0FBQWpDLEtBQUssZUFBZSxBQUFDLDJCQUNiLEVBQUMsR0FBRSxDQUFHLFVBQVMsQUFBRCxDQUFHO0FBQUMsY0FJekIsT0FBSyxBQUFDLENBQUMsV0FBVSxDQUFDLEVBSjhCO0VBQUMsQ0FBQyxDQUFDLENBQUM7QUFEckQsS0FBSyxpQkFBaUIsQUFBQyxDQUFDLE1BQUssUUFBUTtTQUFyQyxFQUFDLEdBQUUsWUFBcUI7QUFBRSx1QkFBd0I7SUFBRSxBQUE5QixDQUFDO0FBQXZCLFdBQVMsQ0FBVCxFQUFDLEtBQUksQ0FBTyxLQUFHLEFBQVMsQ0FBQztDQUFnQyxDQUFBO0FBcUN6RCIsImZpbGUiOiJyb3V0ZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvb3R0by93b3Jrc3BhY2Uvb3BlbnNvdXJjZS9ub2RlLWhhcGktc2VlZC9zZXJ2ZXIvc3JjLyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEhvZWsgZnJvbSAnaG9layc7XG5pbXBvcnQge0luamVjdH0gZnJvbSAnZGknO1xuaW1wb3J0IHtUZXN0U2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvdGVzdC1zZXJ2aWNlJztcblxuQEluamVjdChUZXN0U2VydmljZSlcbmV4cG9ydCBkZWZhdWx0ICBjbGFzcyBJbmRleFJvdXRlIHtcblxuICAgIGNvbnN0cnVjdG9yKHRlc3RTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMudGVzdFNlcnZpY2UgPSB0ZXN0U2VydmljZTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlci5hdHRyaWJ1dGVzID0ge1xuICAgICAgICAgICAgbmFtZTogJ2FwaScsXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnJlZ2lzdGVyLnRlc3RTZXJ2aWNlID0gdGVzdFNlcnZpY2U7XG5cbiAgICB9XG5cbiAgICByZWdpc3RlcihzZXJ2ZXIsIG9wdGlvbnMsIG5leHQpIHtcblxuICAgICAgICBvcHRpb25zID0gSG9lay5hcHBseVRvRGVmYXVsdHMoeyBiYXNlUGF0aDogJycgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIHRlc3RTZXJ2aWNlID0gdGhpcy5yZWdpc3Rlci50ZXN0U2VydmljZTtcblxuICAgICAgICBzZXJ2ZXIucm91dGUoe1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIHBhdGg6IG9wdGlvbnMuYmFzZVBhdGggKyAnLycsXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAocmVxdWVzdCwgcmVwbHkpIHtcblxuICAgICAgICAgICAgICAgIHJlcGx5KHsgbWVzc2FnZTogdGVzdFNlcnZpY2UuZ2V0TWVzc2FnZSgpfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgbmV4dCgpO1xuICAgIH1cbn1cbiJdfQ==
