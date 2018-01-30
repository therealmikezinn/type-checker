const gulp = require('gulp');

const { join } = require('path');

const clean = require('gulp-clean');

const gulpSequence = require('gulp-sequence');

const gulpWebpackMultiConfig = require('gulp-webpack-multi-config');

gulp.task('clean', function () {
  return gulp.src(join(__dirname, 'dist'), { read: false })
    .pipe(clean());
});

gulp.task('webpack', function () {
  return gulp.src(join(__dirname, 'webpack.config.js'), { read: false })
    .pipe(gulpWebpackMultiConfig())
    .on('error', function (err) {
      console.log(err);
    });
});

gulp.task('build', function () {
  gulpSequence('clean', 'webpack')(function (err) {
    if (err) {
      console.log(err);
    }
  });
});
