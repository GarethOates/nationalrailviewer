var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var tsc = require('gulp-typescript');
var htmlmin = require('gulp-htmlmin');
var Server = require('karma').Server;

var paths = {
    scripts: 'src/app/**/*.ts',
    libs: 'src/libs/**/*.*',
    css: 'src/content/*.css',
    html: 'src/content/*.html',
    icon: '*.ico',
    logos: 'src/content/*.svg',
    tests: "test/tests/*[sS]pec.js",
    testsinput: 'test/tests/*[sS]pec.ts',
    testsoutput: 'test/tests',
    dest: 'public'
};

gulp.task('compile', function() {
    var tsConfig = tsc.createProject("tsconfig.json");
    return gulp.src(paths.scripts)
        .pipe(tsc(tsConfig)).pipe(uglify("output.js"))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('move:css', function() {
    return gulp.src(paths.css).pipe(cssnano()).pipe(gulp.dest(paths.dest));
});

gulp.task('move:views', function() {
    return gulp.src(paths.html).pipe(htmlmin({ collapseWhitespace: true })).pipe(gulp.dest(paths.dest));
});

gulp.task('move:icon', function() {
    return gulp.src(paths.icon).pipe(gulp.dest(paths.dest));
});

gulp.task('move:logos', function() {
    return gulp.src(paths.logos).pipe(gulp.dest(paths.dest));
});

gulp.task('move:libs', function() {
    return gulp.src(paths.libs).pipe(gulp.dest(paths.dest + "/libs"));
});

gulp.task('compile:tests', function() {
    gulp.src(paths.testsinput)
        .pipe(tsc({
            "target": "es5",
            "noImplicitAny": true,
            "removeComments": true
        })).pipe(gulp.dest(paths.testsoutput));
});

gulp.task('test', ['compile', 'compile:tests'], function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['compile']);
    gulp.watch(paths.css, ['move:css']);
    gulp.watch(paths.libs, ['move:libs']);
    gulp.watch(paths.html, ['move:views']);
    gulp.watch(paths.testsinput, ['test']);
});

gulp.task('default', ['compile', 'move:libs', 'move:css', 'move:views', 'move:logos', 'move:icon', 'test']);