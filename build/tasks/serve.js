var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build', 'watch'], function() {
  nodemon({ script: 'server',
            ext: 'html js',
})
   .on('start', function () {
     console.log('started!');
   });
});
