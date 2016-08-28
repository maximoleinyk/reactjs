/* global require */
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';

export default (config) => {
	const webpackConfig = require(config.files.webpackConfig);

	gulp.task('transpile', (callback) => {
		webpack(webpackConfig, (err, stats) => {
			if (err) throw new gutil.PluginError("webpack", err);

			gutil.log(stats.toString({
				hash: true,
				version: true,
				timings: true,
				assets: true,
				chunks: false,
				modules: false,
				reasons: true,
				children: true,
				source: true,
				errors: true,
				errorDetails: true,
				warnings: true,
				publicPath: true
			}));

			callback();
		});
	});
};
