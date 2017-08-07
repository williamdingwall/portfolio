// Gulp

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('localhost', function() {
  connect.server({
    root: 'build'
  });
});

gulp.task('sass', function() {
  return gulp.src('styles/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
})
