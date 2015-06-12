var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build', 'watch'], function() {
  nodemon({ script: '../server/dist/server',
            ext: 'html js',
            ignore: ['src/*']
            }
         )
   .on('start', function () {
     console.log('started!');
   });
});
