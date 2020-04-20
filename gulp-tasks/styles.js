var gulp    = require('gulp');
var sass    = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer')
var project = require('./toolchest/_project');

/*
  generate the css with sass
*/
gulp.task('css', function() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions']
    }))
    .pipe(gulp.dest(`${project.buildDest}/css`));
});
