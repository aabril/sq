var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = function() {
      // gulp.watch(['src/img/**'], ['images']);
      gulp.watch(['src/*.jade','src/jade/**/*.jade'], ['build']);
      // gulp.watch(['src/less/*.less','src/less/**/*.less'], ['styles']);
      // gulp.watch(['src/js/*','src/js/**/*'], ['scripts']);
};
