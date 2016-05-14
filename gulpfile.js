var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var plumber = require('gulp-plumber')

function errorHandler(err) {
  var list = err.message.split(':')
  var head = list.shift()
  var body = list.join(':')
  var paths = head.split('/')
  console.log(err.message)
}

gulp.task('build', function() {
  return gulp.src('./src/*.jsx')
  .on('error', errorHandler)
  .pipe($.babel({presets: ['es2015', 'react']}))
  .pipe(plumber({errorHandler: errorHandler}))
  .pipe(gulp.dest('./dest'))
})

gulp.task('watch', function() {
  gulp.watch('./src/*', ['build'])
})

gulp.task('default', ['build', 'watch'])
