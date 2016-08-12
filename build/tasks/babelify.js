import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import aliasify from 'aliasify';
import watchify from 'watchify';
import notify from 'gulp-notify';

export default (config) => {
	gulp.task('babelify', () => {
		return browserify({
			entries: [config.files.startJs],
			extensions: ['.js', '.jsx'],
			debug: true
		})
		.transform({ global: true }, aliasify.configure({
			aliases: {
				'react': `${config.paths.node}/react/dist/react`,
				'react-dom': `${config.paths.node}/react-dom/dist/react-dom`,
				'react-router': `${config.paths.node}/react-router/umd/ReactRouter`,
				'app': `${config.paths.src}/js/app`,
				'common': `${config.paths.src}/js/common`
			}
		}))
		.transform(babelify)
		.bundle()
		.pipe(source(`js/start.js`))
		.pipe(gulp.dest(config.paths.dist));
	});
}
