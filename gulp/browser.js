var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = function () {
   var files = [
      'dist/*.html',
      'dist/js/*.js',
      'dist/css/*.css',
   ];

   browserSync.init(files, {
      server: {
         baseDir: './dist'
      }
   });
};
