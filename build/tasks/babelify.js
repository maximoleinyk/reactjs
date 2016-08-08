import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import aliasify from 'aliasify';

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

	gulp.task('compile:common', () => {
		return browserify({
            entries: [config.files.startJs],
            debug: true,
            shim: {

            }
		})
		.transform('browserify-shim')
		.transform({ global: true }, aliasify.configure(aliasifyConfig))
		.transform(babelify)
		.bundle()
		.pipe(source(`js/start.js`))
		.pipe(gulp.dest(config.paths.dist));
	});

	let modules = gulp.parallel(config.modules.map((name) => {
		let taskName = `compile:${name}`;

		gulp.task(taskName, () => {
			return browserify({
		      entries: [`${config.paths.modules}/${name}/${config.files.moduleFile}`],
					ignore: [
						aliasifyConfig.aliases.react,
						aliasifyConfig.aliases['react-dom']
					],
					debug: config.debug
			})
			.transform({ global: true }, aliasify.configure(aliasifyConfig))
			.transform(babelify)
			.transform(aliasify)
			.bundle()
			.pipe(source(`js/${name}/bundle.js`))
			.pipe(gulp.dest(config.paths.dist));
		});

		return taskName;
	}));

	gulp.task('babelify', gulp.series('compile:common'));
}
