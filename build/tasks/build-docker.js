var gulp = require('gulp');
var exec = require('child_process').exec;

var IMAGE_TAG = process.env.DOCKER_IMAGE_TAG || 'ottogiron/hapiseed';

gulp.task('build-docker', function(callback){

  var dockerBuild = exec('docker build --no-cache -f docker/Dockerfile -t '+ IMAGE_TAG +' .', function(error, stout, stderr) {

    return callback(error);
  });

  dockerBuild.stdout.on('data', function (data) {
    process.stdout.write(data.toString());
  });

  dockerBuild.stderr.on('data', function (data) {
    process.stdout.write(data.toString());
  });

});
