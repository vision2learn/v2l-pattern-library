const gulp   = require('gulp');
const terser = require('terser');
const composer = require('gulp-uglify/composer');
const uglify = composer(terser, console);
const concat = require('gulp-concat');
var project = require('./toolchest/_project');

/*
  Uglify our javascript files into one.
*/
gulp.task('otherjs', function() {
  return gulp.src('./src/site/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(`${project.buildDest}/js`));
});

gulp.task('js', function() {
  return gulp.src(["./src/js/script.js", "./src/js/_functions/**/*.js"])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest(`${project.buildDest}/js`));
});
