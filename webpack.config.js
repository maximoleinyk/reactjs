var path = require('path'),
		webpack = require('webpack');

var dir = function(p) {
	return path.resolve(__dirname, p);
};

module.exports = {
	context: dir('./src'),

	entry: {
		start: './js/start.js',
		common: [
			'./js/common/helpers',
			'./js/common/locale'
		]
	},

	output: {
		publicPath: '/static/js/',
		path: dir('./dist/js'),
		filename: '[name].js'
	},

	devtool: 'inline-source-map',

	resolve: {
		alias: {
			app: dir('./src/js/app'),
			common: dir('./src/js/common')
		},
		modulesDirectories: [
			'./node_modules',
			'./src/js'
		],
		extensions: ['', '.js', '.jsx']
	},

	module: {
		loaders: [
			{
				test: /(.jsx)|(.js)/,
				loaders: ['babel-loader'],
				exclude: /node_modules/
			}
		]
	},

	plugins: [
		new webpack.ProvidePlugin({
		  React: 'react',
			ReactDOM: 'react-dom'
		})
	]
};
