var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var tsc = require('gulp-typescript');
var htmlmin = require('gulp-htmlmin');
var jasmine = require('gulp-jasmine');

var paths = {
    scripts: 'src/app/**/*.ts',
    css: 'src/content/*.css',
    html: 'src/content/*.html',
    icon: '*.ico',
    tests: 'spec/tests/*[sS]pec.ts',
    testOutput: 'spec/tests',
    dest: 'public'
};

gulp.task('compile', function () {
    var tsConfig = tsc.createProject("tsconfig.json");
    return gulp.src(paths.scripts)
        .pipe(tsc(tsConfig)).pipe(uglify("output.js"))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('move:css', function () {
    return gulp.src(paths.css).pipe(cssnano()).pipe(gulp.dest(paths.dest));
});

gulp.task('move:views', function () {
    return gulp.src(paths.html).pipe(htmlmin({ collapseWhitespace: true })).pipe(gulp.dest(paths.dest));
});

gulp.task('move:icon', function () {
    return gulp.src(paths.icon).pipe(gulp.dest(paths.dest));
});

gulp.task('run:tests', function () {
    gulp.src(paths.tests)
        .pipe(tsc({
            "target": "es5",
            "noImplicitAny": true,
        })).js
        .pipe(gulp.dest(paths.testOutput));
});

gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['compile']);
    gulp.watch(paths.css, ['move:css']);
    gulp.watch(paths.html, ['move:views']);
    gulp.watch(paths.tests, ['run:tests']);
});

gulp.task('default', ['compile', 'move:css', 'move:views', 'move:icon']);