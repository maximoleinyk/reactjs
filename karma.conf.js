/*global require module __dirname */

var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = function(config) {
	config.set({
		singleRun: false,

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

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

		preprocessors: {
			'test/index.js': ['webpack', 'sourcemap']
		},

		reporters: ['spec', 'coverage'],

		webpack: {
			devtool: 'inline-source-map',

			module: {
				loaders: [
					{
						test: /\.js$/,
            // do not include istanbul plugin to global babel config
            // it will break the build
						loader: 'babel?plugins[]=istanbul',
						exclude: /node_modules/
					},
					{
						test: /\.(scss|sass)$/,
						loader: 'style!css!postcss!sass',
						include: path.resolve(__dirname, './src/css')
					},
					{
						test: /\.(eot|svg|ttf|woff|woff2)(\?.*$|$)/,
						loader: `file?name=fonts/[name].[ext]`
					}
				]
			},

			resolve: {
				alias: {
					css: path.resolve(__dirname, 'src/css'),
					app: path.resolve(__dirname, 'src/js/app'),
					common: path.resolve(__dirname, 'src/js/common')
				},
				extensions: ['', '.js', '.jsx', '.scss', '.css']
			},

			sassLoader: {
				data: '$fa-font-path: "~font-awesome/fonts";'
			},

			postcss() {
				return [autoprefixer({
					browsers: ['last 2 version']
				})];
			},

			plugins: [
				new webpack.ContextReplacementPlugin(
          /node_modules\/moment\/locale/, 
          new RegExp('en')
        ),
				new webpack.DefinePlugin({
					MODULES: JSON.stringify([]),
					VERSION: JSON.stringify('__TEST__'),
					LOCALE: JSON.stringify('en')
				}),
				new webpack.ProvidePlugin({
					React: 'react',
					jQuery: 'jquery',
					$: 'jquery',
					'window.Tether': 'tether'
				})
			]
		},

		webpackMiddleware: {
			noInfo: true
		}
	});
};
