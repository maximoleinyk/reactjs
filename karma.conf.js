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
		logLevel: config.LOG_ERROR,

		browsers: ['PhantomJS'],
		frameworks: ['mocha', 'chai', 'sinon'],
		plugins: [
			require('karma-webpack'),
			require("karma-mocha"),
			require('karma-chai'),
      require('karma-sinon'),
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
