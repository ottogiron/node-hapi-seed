var gulp = require('gulp');
var babel= require('gulp-babel');
var traceur = require('gulp-traceur');
var babelOption = require('../babel-options');
var paths = require('../paths');

// https://www.npmjs.com/package/gulp-plumber
gulp.task('build', function () {
  return gulp.src(paths.source)
    .pipe(traceur({annotations:true}))
    .pipe(gulp.dest(paths.output));
});
