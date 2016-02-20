var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');
var ts = require('gulp-typescript');

var paths = {
    scripts: 'src/**/*.ts',
    css: 'src/content/*.css',
    views: 'src/app/NationalRailViewerApp/views/*.html',
    dest: 'build',
    destViews: 'build/views',
}

/*gulp.task('transpile:typescript', function() {
    return gulp.src(paths.typescripts)
            .pipe(ts(), {
                noImplicitAny: true,
                target: 'ES5'
             })
            .pipe(gulp.dest(paths.destjs));
})*/

gulp.task('move:css', ['clean:build'], function () {
    return gulp.src(paths.css).pipe(gulp.dest(paths.dest));
})

gulp.task('move:views', ['clean:build'], function() {
    return gulp.src(paths.views).pipe(gulp.dest(paths.destViews));
})

gulp.task('clean:build', function () {
    return del.sync(paths.dest);
})

gulp.task('minify', ['move:css', 'move:views'], function () {
    return gulp.src(paths.scripts)
        .pipe(concat('nationalrailviewer.min.ts'))
        .pipe(ts(), {
            noImplicitAny: true,
            target: 'ES5'
        })
        // .pipe(uglify('nationalrailviewer.min.js', {
        //     mangle: true,
        // }))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('default', ['clean:build', 'move:css', 'move:views', 'minify']);