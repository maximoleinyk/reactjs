/*global require module process */

const isProduction = process.env.NODE_ENV === 'production';

module.exports = function(config) {
	config.set({
		files: [
			'test/index.js'
		],

		singleRun: isProduction,
		autoWatch: !isProduction,
		colors: true,
		port: 9876,
		logLevel: config.LOG_INFO,

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
		preprocessors: {
			'test/index.js': ['webpack', 'sourcemap']
		},
		reporters: ['spec', 'coverage'],
		webpack: require('./build/karma.webpack'),
		webpackMiddleware: {
			noInfo: true
		}
	});
};
