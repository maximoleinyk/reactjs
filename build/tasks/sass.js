import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import clean from 'gulp-clean-css';
import concat from 'gulp-concat';

export default (config) => {
  gulp.task('sass', () => {
    return gulp.src([
        `${config.paths.css}/*.sass`,
        `${config.paths.css}/**/*.sass`,
        `${config.paths.css}/*.css`,
        `${config.paths.css}/**/*.css`,
        `!${config.paths.css}/all.css.map`,
        `!${config.paths.css}/all.css`
      ])
      .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(concat('all.css'))
      .pipe(clean())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(config.paths.distCss));
  });
}
