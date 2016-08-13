var path = require('path'),
		fs = require('fs'),
		webpack = require('webpack'),
		ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

var dir = function(p) {
	return path.resolve(__dirname, p);
};

var manifest = {
	manifestVariable: 'manifest',
	filename: 'manifest.json'
};

module.exports = {
	context: dir('./src'),

	manifest: manifest,
	externals: {
	  //don't bundle the 'react' npm package with our bundle.js
	  //but get it from a global 'React' variable
	  // 'react': 'React'
	},
	entry: {
		start: './js/start.js',
		common: [
			'react',
			'react-dom',
			'react-router',
			'history',
			'jquery',
			'app/app'
		]
	},

	output: {
		path: dir('./dist/js'),
		publicPath: '/static/js/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js'
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
				test: /\.(jsx|js)/,
				loaders: ['babel-loader'],
				exclude: /node_modules/
			}
		]
	},

	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			React: 'react',
			ReactDOM: 'react-dom'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			children: true,
			minChunks: Infinity
		}),
		new ChunkManifestPlugin(manifest),
		new webpack.optimize.OccurenceOrderPlugin()
	]
};
