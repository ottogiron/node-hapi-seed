var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


gulp.task('serve', ['watch'], function() {
  nodemon({ script: 'server',
            ext: 'html js',
})
   .on('start', function () {
     console.log('started!');
   });
});
