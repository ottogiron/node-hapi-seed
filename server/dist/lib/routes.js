"use strict";
var $__hoek__,
    $__require_45_dir__;
var Hoek = ($__hoek__ = require("hoek"), $__hoek__ && $__hoek__.__esModule && $__hoek__ || {default: $__hoek__}).default;
var requireDir = ($__require_45_dir__ = require("require-dir"), $__require_45_dir__ && $__require_45_dir__.__esModule && $__require_45_dir__ || {default: $__require_45_dir__}).default;
exports.register = function(server, options, next) {
  var options = Hoek.applyToDefaults({basePath: ''}, options);
  var paths = options.paths || [];
  var injector = options.injector;
  if (injector) {
    var $__5 = true;
    var $__6 = false;
    var $__7 = undefined;
    try {
      for (var $__3 = void 0,
          $__2 = (paths)[$traceurRuntime.toProperty(Symbol.iterator)](); !($__5 = ($__3 = $__2.next()).done); $__5 = true) {
        var path = $__3.value;
        {}
      }
    } catch ($__8) {
      $__6 = true;
      $__7 = $__8;
    } finally {
      try {
        if (!$__5 && $__2.return != null) {
          $__2.return();
        }
      } finally {
        if ($__6) {
          throw $__7;
        }
      }
    }
  }
};
exports.register.attributes = {name: 'routes'};
