import gulp from 'gulp';
import eslint from 'gulp-eslint';

export default (config) => {
  gulp.task('eslint', () => {
    return gulp.src([
      `${config.paths.source}/js/**/*.js`,
      `${config.paths.source}/js/*.js`
    ])
      .pipe(eslint({
        configFile: '.eslintrc'
      }))
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  });
}
