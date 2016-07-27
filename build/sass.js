var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    clean = require('gulp-clean-css'),
    concat = require('gulp-concat');

gulp.task('styles', function() {
  return gulp.src([
      'src/css/*.sass',
      'src/css/**/*.sass',
      'src/css/*.css',
      'src/css/**/*.css',
      '!src/css/all.css.map',
      '!src/css/all.css'
    ])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(concat('all.css'))
    .pipe(clean())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('src/css'));
});
