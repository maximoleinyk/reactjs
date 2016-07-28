const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const rename = require('gulp-rename');
const source = require('vinyl-source-stream');

gulp.task('babel', () => {
	return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('temp'));
});

gulp.task('browserify', () => {
	return gulp.src('temp/js/config.js')
        .pipe(browserify({
            debug: true
        }))
        .pipe(rename('module.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('scripts', gulp.series('babel', 'browserify'));
