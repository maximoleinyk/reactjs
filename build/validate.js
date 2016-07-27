const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('validate', function() {
  return gulp.src(['src/js/**/*.js', 'src/js/*.js'])
    .pipe(eslint({
      configFile: '.eslintrc'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
