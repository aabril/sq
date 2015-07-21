var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = function () {
   var files = [
      'public/*.html',
      'public/js/*.js',
      'public/css/*.css',
   ];

   browserSync.init(files, {
      server: {
         baseDir: './public'
      }
   });
};
