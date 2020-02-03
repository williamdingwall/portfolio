// Gulp

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('localhost', ['watch'], function() {
  connect.server({
    root: 'build'
  });
});

gulp.task('sass', function() {
  return gulp.src('styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'))
})

gulp.task('watch', function(){
  gulp.watch('styles/**/*.scss', ['sass']);
  // Other watchers
})
