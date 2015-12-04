/**
 * Created by rexsy on 2015/12/2.
 */
var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var spriter = require('gulp-css-spriter');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('clean', function() {
    return del(['build']);
});

gulp.task('less', function(){
    gulp.src('./less/normal.less')
        .pipe(less())
        .pipe(gulp.dest('build/css'));
});

gulp.task('spriter', function() {
    return gulp.src('./css/overall.css')
        .pipe(spriter({
            'spriteSheet': 'build/img/spritesheet.png',
            'pathToSpriteSheetFromCSS': '../img/spritesheet.png'
        }))
        .pipe(gulp.dest('build/css'));
});

gulp.task('autoprefixer', function () {
    return gulp.src('./css/autoprefixTest.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('build/css'));
});

gulp.task('default', ["clean","less","spriter","autoprefix"]);
