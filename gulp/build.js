var gulp = require('gulp');
var jade = require('gulp-jade');
// require('gulp-stylus');
// require('gulp-stylus');

var build = {};

build.jade = function(){
  var locals = {};
  var paths = [ 'src/jade/**jade' ];
  return gulp
            .src(paths)
            .pipe(jade({ locals: locals , pretty: true }))
            .pipe(gulp.dest('./public/'));
};
build.stylus = function(){

};
build.coffee = function(){

};
build.img = function(){

};


module.exports.jade = build.jade;
module.exports.stylus = build.stylus;
module.exports.coffee = build.coffee;
module.exports.img = build.img;
