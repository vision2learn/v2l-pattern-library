const gulp   = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
var project = require('./toolchest/_project');

/*
  Uglify our javascript files into one.
*/
gulp.task('js', function() {
  return gulp.src("./src/js/**/*.js")
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest(`${project.buildDest}/js`));
});
