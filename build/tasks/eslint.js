import gulp from 'gulp';
import eslint from 'gulp-eslint';

export default (config) => {
	gulp.task('eslint', () => {
		return gulp.src([
			`${config.paths.src}/js/**/*.js`,
			`${config.paths.src}/js/*.js`
		])
		.pipe(eslint({
			configFile: '.eslintrc'
		}))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
	});
}
