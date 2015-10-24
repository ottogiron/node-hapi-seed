var gulp = require('gulp');
var exec = require('child_process').exec;

var IMAGE_TAG = process.env.DOCKER_IMAGE_TAG || 'ottogiron/hapiseed';

gulp.task('build-docker', function(callback){

  var dockerBuild = exec('docker build --no-cache -f docker/Dockerfile -t '+ IMAGE_TAG +' .');

  dockerBuild.stdout.on('data', function (data) {
    console.log(data.toString());
  });

  dockerBuild.stderr.on('data', function (data) {
    console.log(data.toString());
  });

  return callback();

});
