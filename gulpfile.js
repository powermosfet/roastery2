var gulp = require("gulp");
var gulpBrowser = require("gulp-browser");
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
    
function compile() {
  var stream = gulp.src('./frontend/js/*.jsx')
    .pipe(babel({ presets: ['react'] }))
    .pipe(gulpBrowser.browserify())
    .pipe(uglify())
    .pipe(gulp.dest("./public/js/"));
  return stream;
}

gulp.task('build', function() { return compile(); });

gulp.task('default', ['build']);
