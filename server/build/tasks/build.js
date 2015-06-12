var gulp = require('gulp');
var babel= require('gulp-babel');
var babelOption = require('../babel-options');
var paths = require('../paths');

// https://www.npmjs.com/package/gulp-plumber
gulp.task('build', function () {
  return gulp.src(paths.source)
    .pipe(babel(babelOption))
    .pipe(gulp.dest(paths.output));
});
