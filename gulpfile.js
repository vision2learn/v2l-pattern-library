const gulp  = require('gulp');

/**
  Our gulp tasks live in their own files,
  for the sake of clarity.
 */
require('require-dir')('./gulp-tasks');



/*
  Watch folders for changess
*/
gulp.task("watch", function() {
  gulp.watch('./src/scss/**/*.scss', gulp.parallel('css'));
  gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
  gulp.watch('./src/image/**/*.jpg', gulp.parallel('images'));
});


/*
  Let's build this sucker.
*/


if(process.env.ELEVENTY_ENV === 'dev' && 1 === 1) {
  gulp.task('build', gulp.parallel(
    'css',
    'js'
  ));
} 
else {
  gulp.task('build', gulp.parallel(
    'css',
    'js'
  ));
}


/*
  Build and watch things during dev
*/
gulp.task('dev', gulp.series(
  'build',
  'watch'
));
