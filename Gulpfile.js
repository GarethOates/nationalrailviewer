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
    dest: 'public'
};

gulp.task('compile', function () {
        return gulp.src('src/**/*.ts')
            .pipe(ts({
                "target": "es5",
                "noImplicitAny": true,
                "outFile": "output.js"
            })).pipe(uglify("output.js"))
            .pipe(gulp.dest(paths.dest));
});

gulp.task('move:css', function () {
    return gulp.src(paths.css).pipe(gulp.dest(paths.dest));
});

gulp.task('move:views', function () {
    return gulp.src(paths.views).pipe(gulp.dest(paths.dest));
});

// gulp.task('clean:build', function () {
//     return del.sync(paths.dest);
// });

gulp.task('default', ['compile', 'move:css', 'move:views']);