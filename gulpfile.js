var gulp = require('gulp');
var requireDir = require('require-dir');
var tasks = requireDir('./gulp');
var browserSync = require('browser-sync');

gulp.task('build:jade', tasks.build.jade);
gulp.task('build:stylus', tasks.build.stylus);
gulp.task('build:coffee', tasks.build.coffee);
gulp.task('build:img', tasks.build.img);
gulp.task('build:fonts', tasks.build.fonts);

gulp.task('build', ['build:jade','build:stylus', 'build:coffee', 'build:img', 'build:fonts']);

gulp.task('loop', tasks.loop);
gulp.task('browser', tasks.browser );

gulp.task('default', ['build', 'loop', 'browser']);
