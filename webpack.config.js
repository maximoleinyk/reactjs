var path = require('path');

module.exports = {
	context: path.join(__dirname, '/src'),
	entry: {
		start: './js/start.js',
		account: './js/app/account/main.js',
		settings: './js/app/settings/main.js',
		common: [
			'./js/common/helpers',
			'./js/common/locale'
		]
	},
	output: {
		publicPath: '/static',
		path: path.join(__dirname, './dist/js'),
		filename: '[name].js'
	},
	resolve: {
		root: [
			path.resolve('./src/asdacss')
		],
		alias: {
			app: path.join(__dirname, './src/js/app'),
			common: path.join(__dirname, './src/js/common')
		},
		modulesDirectories: [
			'./node_modules'
		],
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
};
