var project     = require('./toolchest/_project');
var os          = require("os");
var gulp        = require('gulp');
var parallel    = require("concurrent-transform");
var rename      = require("gulp-rename");
var imageResize = require('gulp-image-resize');



// create a set of resize tasks at defined image widths
var resizeImageTasks = [];
[400,600,800,1000,2000].forEach(function(size) {
  var resizeImageTask = 'resize_' + size;
  gulp.task(resizeImageTask, function(done) {
    gulp.src([project.buildSrc + '/site/images/**/*.jpg',project.buildSrc + '/site/images/**/*.png'])
    .pipe(parallel(
      imageResize({ width : size }),
      os.cpus().length
    ))
    .pipe(rename(function (path) { 
      path.basename += "-" + size; 
    }))
    .pipe(gulp.dest(project.buildDest+ '/images'));
    done();
  });
  resizeImageTasks.push(resizeImageTask);
});



// Copy our core images to the dist folder, and resize all preview images
gulp.task('images', gulp.parallel(resizeImageTasks));