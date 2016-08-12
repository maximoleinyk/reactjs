import fs from 'fs';
import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';

export default (config) => {
	const webpackConfig = require(config.files.webpackConfig);

	gulp.task('transpile', (callback) => {
		webpack(webpackConfig, (err, stats) => {
			if (err) throw new gutil.PluginError("webpack", err);

			gutil.log(stats.toString({
				hash: false,
				version: false,
				timings: false,
				assets: false,
				chunks: false,
				modules: false,
				reasons: false,
				children: true,
				source: false,
				errors: false,
				errorDetails: false,
				warnings: false,
				publicPath: false
			}));

			callback();
		});
	});
};
