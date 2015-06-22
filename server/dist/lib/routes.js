"use strict";
var $__hoek__,
    $__require_45_dir__,
    $__path__,
    $__di__;
var Hoek = ($__hoek__ = require("hoek"), $__hoek__ && $__hoek__.__esModule && $__hoek__ || {default: $__hoek__}).default;
var requireDir = ($__require_45_dir__ = require("require-dir"), $__require_45_dir__ && $__require_45_dir__.__esModule && $__require_45_dir__ || {default: $__require_45_dir__}).default;
var npath = ($__path__ = require("path"), $__path__ && $__path__.__esModule && $__path__ || {default: $__path__}).default;
var Injector = ($__di__ = require("di"), $__di__ && $__di__.__esModule && $__di__ || {default: $__di__}).Injector;
exports.register = function(server, options, next) {
  var injector = new Injector();
  var options = Hoek.applyToDefaults({}, options);
  if (injector) {
    var $__7 = true;
    var $__8 = false;
    var $__9 = undefined;
    try {
      for (var $__5 = void 0,
          $__4 = (options.paths)[$traceurRuntime.toProperty(Symbol.iterator)](); !($__7 = ($__5 = $__4.next()).done); $__7 = true) {
        var path = $__5.value;
        {
          var absolutePath = npath.resolve(path);
          var services = requireDir(absolutePath, {recurse: true});
          var route = injector.get(services.api.index.default);
          server.register({register: route}, function(err) {});
        }
      }
    } catch ($__10) {
      $__8 = true;
      $__9 = $__10;
    } finally {
      try {
        if (!$__7 && $__4.return != null) {
          $__4.return();
        }
      } finally {
        if ($__8) {
          throw $__9;
        }
      }
    }
  }
  next();
};
exports.register.attributes = {name: 'routes'};
