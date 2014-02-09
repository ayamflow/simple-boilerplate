var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('sass', function () {
    gulp.src('./sass/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('connect', connect.server({
  root: __dirname,
  port: ~~(Math.random()) * 10000,
  open: {
    file: 'index.html',
    browser: 'Google Chrome'
  }
}));

gulp.task('watch', function() {
    gulp.watch('./**/*.scss', ['sass']);
});