"use strict";
var Lab = require('lab');
var Code = require('code');
var Config = require('../config');
var lab = exports.lab = Lab.script();
lab.experiment('Config', function() {
  lab.test('it gets config data', function(done) {
    Code.expect(Config.get('/')).to.be.an.object();
    done();
  });
  lab.test('it gets config meta data', function(done) {
    Code.expect(Config.meta('/')).to.match(/this file configures the plot device/i);
    done();
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0ZXN0L2NvbmZpZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTGFiID0gcmVxdWlyZSgnbGFiJyk7XG52YXIgQ29kZSA9IHJlcXVpcmUoJ2NvZGUnKTtcbnZhciBDb25maWcgPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxuXG52YXIgbGFiID0gZXhwb3J0cy5sYWIgPSBMYWIuc2NyaXB0KCk7XG5cblxubGFiLmV4cGVyaW1lbnQoJ0NvbmZpZycsIGZ1bmN0aW9uICgpIHtcblxuICAgIGxhYi50ZXN0KCdpdCBnZXRzIGNvbmZpZyBkYXRhJywgZnVuY3Rpb24gKGRvbmUpIHtcblxuICAgICAgICBDb2RlLmV4cGVjdChDb25maWcuZ2V0KCcvJykpLnRvLmJlLmFuLm9iamVjdCgpO1xuXG4gICAgICAgIGRvbmUoKTtcbiAgICB9KTtcblxuXG4gICAgbGFiLnRlc3QoJ2l0IGdldHMgY29uZmlnIG1ldGEgZGF0YScsIGZ1bmN0aW9uIChkb25lKSB7XG5cbiAgICAgICAgQ29kZS5leHBlY3QoQ29uZmlnLm1ldGEoJy8nKSkudG8ubWF0Y2goL3RoaXMgZmlsZSBjb25maWd1cmVzIHRoZSBwbG90IGRldmljZS9pKTtcblxuICAgICAgICBkb25lKCk7XG4gICAgfSk7XG59KTtcbiJdLCJmaWxlIjoidGVzdC9jb25maWcuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==