
var gulp = require('gulp');
var lab = require('gulp-lab');
var traceur = require('gulp-traceur');



gulp.task('test', function () {

  require(traceur.RUNTIME_PATH);
    return gulp.src('dist/test')
      .pipe(lab());
});
