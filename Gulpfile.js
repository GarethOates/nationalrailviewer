var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var print = require('gulp-print');

var paths = {
    scripts: 'src/**/*.ts',
    css: 'src/content/*.css',
    views: 'src/app/NationalRailViewerApp/views/*.html',
    dest: 'build',
    destViews: 'build/views',
};

gulp.task('move:css', ['clean:build'], function () {
    return gulp.src(paths.css).pipe(gulp.dest(paths.dest));
});

gulp.task('move:views', ['clean:build'], function () {
    return gulp.src(paths.views).pipe(gulp.dest(paths.destViews));
});

gulp.task('clean:build', function () {
    return del.sync(paths.dest);
});

gulp.task('default', ['clean:build', 'move:css', 'move:views']);