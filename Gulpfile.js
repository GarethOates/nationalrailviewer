var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var ts = require('gulp-typescript');
var htmlmin = require('gulp-htmlmin');

var paths = {
    scripts: 'src/app/**/*.ts',
    css: 'src/content/*.css',
    html: 'src/content/*.html',
    dest: 'public'
};

gulp.task('compile', function () {
        return gulp.src(paths.scripts)
            .pipe(ts({
                "target": "es5",
                "noImplicitAny": true,
                "outFile": "output.js"
            })).pipe(uglify("output.js"))
            .pipe(gulp.dest(paths.dest));
});

gulp.task('move:css', function () {
    return gulp.src(paths.css).pipe(cssnano()).pipe(gulp.dest(paths.dest));
});

gulp.task('move:views', function () {
    return gulp.src(paths.html).pipe(htmlmin({collapseWhitespace: true})).pipe(gulp.dest(paths.dest));
});

gulp.task('default', ['compile', 'move:css', 'move:views']);