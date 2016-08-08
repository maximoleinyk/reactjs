import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import aliasify from 'aliasify';
import watchify from 'watchify';
import notify from 'gulp-notify';

export default (config) => {
	const aliasifyConfig = {
		aliases: {
			'react': `${config.paths.node}/react/dist/react`,
			'react-dom': `${config.paths.node}/react-dom/dist/react-dom`,
			'react-router': `${config.paths.node}/react-router/umd/ReactRouter`,
			'app': `${config.paths.source}/js/app`,
			'common': `${config.paths.source}/js/common`
		}
	};

	gulp.task('compile:vendor', () => {
		let vendorBundler = browserify({
			debug: true
		})
		.require(['react', 'react-dom']);

		let clientBundler = watchify(browserify({
			entries: [config.files.startJs],
			extensions: ['.js', '.jsx'],
			debug: true
		}))
		.transform({ global: true }, aliasify.configure(aliasifyConfig))
		.transform(babelify)
		.external(['react', 'react-dom']);

		let rebundle = () => {
			let start = Date.now();

			return clientBundler.bundle()
			.pipe(source('start.js'))
			.pipe(gulp.dest('./dist/js'))
			.pipe(notify(() => {
				console.log('Built in ' + (Date.now() - start) + 'ms');
			}));
		};

		clientBundler.on('update', rebundle);

		vendorBundler.bundle()
		.pipe(source('vendor.js'))
		.pipe(gulp.dest('./dist/js'));

		return rebundle();
	});

	gulp.task('compile:common', () => {
		return browserify({
			entries: [config.files.startJs],
			extensions: ['.js', '.jsx'],
			debug: true
		})
		.transform({ global: true }, aliasify.configure(aliasifyConfig))
		.transform(babelify)
		.bundle()
		.pipe(source(`js/start.js`))
		.pipe(gulp.dest(config.paths.dist));
	});

	gulp.task('babelify', gulp.series('compile:vendor'));
}
