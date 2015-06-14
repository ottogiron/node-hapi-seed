var gulp = require('gulp');
var babel= require('gulp-babel');
var traceur = require('gulp-traceur');
var babelOption = require('../babel-options');
var paths = require('../paths');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');


// https://www.npmjs.com/package/gulp-plumber
gulp.task('build', function () {
  return gulp.src(paths.source)
  	.pipe(plumber())
  	.pipe(changed(paths.output, {extension: '.js'}))
    .pipe(traceur({annotations:true}))
    .pipe(gulp.dest(paths.output));
});
