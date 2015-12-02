/**
 * Created by rexsy on 2015/12/2.
 */
var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');

gulp.task('clean', function() {
    return del(['build']);
});

gulp.task('less', function(){
    gulp.src('./less/normal.less')
        .pipe(less())
        .pipe(gulp.dest('build/css'));
});

gulp.task('default', ["del","less"]);
