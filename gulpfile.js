var gulp = require('gulp');
var babel = require('gulp-babel');
 
gulp.task('transpile', function () {
    return gulp.src('app/index.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('transpile-watch', function() {
  gulp.run(['transpile'])
  gulp.watch(['app/**/*.js'], ['transpile']);
});

gulp.task('default', ['transpile-watch'])