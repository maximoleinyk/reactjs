import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';

export default (config) => {
	const babelifyConfig = {
		presets: [
			'es2015',
			'react'
		]
	};

	gulp.task('compile:common', () => {
		return browserify({
				entries: ['src/js/main.js'],
				paths: ['./src/js/', './bower_components/react/'],
				debug: config.debug
		})
		.transform(babelify.configure(babelifyConfig))
		.bundle()
		.pipe(source(`js/common.js`))
		.pipe(gulp.dest(config.paths.dist));
	});

	let modules = gulp.parallel(config.modules.map((name) => {
		let taskName = `compile:${name}`;

		gulp.task(taskName, () => {
			return browserify({
		      entries: [`${config.paths.modules}/${name}/${config.files.moduleFile}`],
					debug: config.debug
			})
			.transform(babelify.configure(babelifyConfig))
			.bundle()
			.pipe(source(`js/${name}/bundle.js`))
			.pipe(gulp.dest(config.paths.dist));
		});

		return taskName;
	}));

	gulp.task('babelify', gulp.series('compile:common', gulp.parallel(modules)));
}
