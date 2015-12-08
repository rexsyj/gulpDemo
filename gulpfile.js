/**
 * Created by rexsy on 2015/12/2.
 */
var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var spriter = require('gulp-css-spriter');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

gulp.task('clean', function() {
    return del(['build']);
});

gulp.task('less', function(){
    return gulp.src('./less/normal.less')
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

gulp.task('concat', function() {
    return gulp.src('./css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('minify-css', function() {
    return gulp.src('./css/*.css')
        .pipe(minifyCss())
        .pipe(gulp.dest('build/css'));
});

gulp.task('uglify', function() {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('imagemin', function() {
    return gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'));
});

gulp.task('default', ["clean"]);
