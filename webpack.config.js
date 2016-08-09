var path = require('path'),
		webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		start: './js/start.js',
		account: './js/app/account/main.js',
		settings: './js/app/settings/main.js',
		common: [
			'./js/common/helpers',
			'./js/common/locale'
		]
	},
	stats: {
		colors: true,
		reasons: true
	},
	output: {
		publicPath: '/static',
		path: path.resolve(__dirname, './dist/js'),
		filename: '[name].js'
	},
	resolve: {
		alias: {
			app: path.resolve(__dirname, './src/js/app'),
			common: path.resolve(__dirname, './src/js/common')
		},
		modulesDirectories: [
			'./node_modules'
		],
		extensions: ['', '.js', '.jsx']
	},

  devtool: 'inline-source-map',

	module: {
		loaders: [
			{
				test: /.jsx?$/,
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
