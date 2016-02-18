var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');
var runseq = require('run-sequence');

var paths = {
    scripts: ['src/**/*.js'],
    css: 'src/content/*.css',
    views: 'src/app/NationalRailViewerApp/views/*.html',
    dest: 'build',
    destViews: 'build/views'
}

gulp.task('move:css', function () {
    return gulp.src(paths.css).pipe(gulp.dest(paths.dest));
})

gulp.task('move:views', function() {
    return gulp.src(paths.views).pipe(gulp.dest(paths.destViews));
})

gulp.task('clean:build', function () {
    return del.sync('build');
})

gulp.task('minify', function () {
    return gulp.src(paths.scripts)
        .pipe(concat('nationalrailviewer.min.js'))
        .pipe(uglify('nationalrailviewer.min.js', {
            mangle: true,
        }))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('default', function () {
    runseq('default', ['clean:build', 'move:views', 'move:css', 'minify']);
});