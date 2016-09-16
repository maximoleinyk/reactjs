/*global require module */

module.exports = function(config) {
	config.set({
		singleRun: true,
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		frameworks: ['mocha', 'chai'],
		plugins: [
			require('karma-webpack'),
			require('karma-chai'),
			require("karma-mocha"),
			require('karma-sourcemap-loader'),
			require("karma-phantomjs-launcher"),
			require("karma-spec-reporter"),
			require("karma-coverage")
		],
		files: [
			'test/index.js'
		],
		preprocessors: {
			'test/index.js': ['webpack', 'sourcemap']
		},
		reporters: ['spec', 'coverage'],

		/* webpack */
		webpack: require('./build/karma.webpack'),
		webpackMiddleware: {
			noInfo: true
		}
	});
};
