var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');

var paths = {
    scripts: ['angular/**/*.js']
}

gulp.task('clean:dist', function () {
    return del.sync('dist');
})

gulp.task('minify', function () {
    return gulp.src(paths.scripts).pipe(concat('nationalrailviewer.min.js'))
        .pipe(uglify('nationalrailviewer.min.js', {
        mangle: true,
    }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean:dist', 'minify']);