const gulp = require('gulp');

const { join } = require('path');

const clean = require('gulp-clean');

const gulpSequence = require('gulp-sequence');

const webpackMultiBuild = require(join(__dirname, 'tasks', 'webpack.multi.build.js'));

gulp.task('clean', function() {
    return gulp.src(join(__dirname, 'dist'), {read: false})
            .pipe(clean());
});

gulp.task('webpack', function(){
    return gulp.src(join(__dirname, 'webpack.config.js'), {read: false})
        .pipe(webpackMultiBuild())
        .on('error', function(err){
            console.log(err);
        });
});

gulp.task('build', function(){
    gulpSequence('clean', 'webpack')(function (err) {
        if (err){
          console.log(err);
        }
    });
});