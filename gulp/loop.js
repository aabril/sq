var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = function() {
      gulp.watch(['src/img/**'], ['build:img']);
      gulp.watch(['src/*.jade','src/jade/**/*.jade'], ['build:jade']);
      gulp.watch(['src/styl/*.styl','src/styl/**/*.styl'], ['build:stylus']);
      // gulp.watch(['src/js/*','src/js/**/*'], ['scripts']);
};
