var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');

var build = {};

build.jade = function(){
  var locals = {};
  var paths = [ 'src/jade/**jade' ];
  return gulp.src(paths)
             .pipe(jade({ locals: locals , pretty: true }))
             .pipe(gulp.dest('./public/'));
};
build.stylus = function(){
   var paths = [ 'src/styl/*styl'];
   return gulp.src(paths).pipe(stylus()).pipe(gulp.dest('./public/'));
};
build.coffee = function(){
  return  gulp.src('./src/coffee/*.coffee')
              .pipe(coffee({bare: true}).on('error', gutil.log))
              .pipe(gulp.dest('./public/'))
};
build.img = function(){
  var paths = [ 'src/img/**'];
  return gulp
        .src(paths)
        .pipe(gulp.dest('./public/'));
};


module.exports.jade = build.jade;
module.exports.stylus = build.stylus;
module.exports.coffee = build.coffee;
module.exports.img = build.img;
