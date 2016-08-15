import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin';

const dynamic = {
	manifestVariable: 'manifest',
	filename: 'manifest.json',
	version: 'DEVELOPMENT'
};

module.exports = {
	dynamic: dynamic,

	context: `${__dirname}/src`,

	entry: {
		start: './js/start'
	},

	devtool: 'source-map',

	output: {
		path: `${__dirname}/dist/js`,
		publicPath: `/static/js/`,
		library: 'about', // wrap start.js with about variable
		filename: '[name].js?hash=[hash]',
		chunkFilename: '[name].js?hash=[hash]'
	},

	resolve: {
		alias: {
			css: `${__dirname}/src/css`,
			app: `${__dirname}/src/js/app`,
			common: `${__dirname}/src/js/common`
		},
		modulesDirectories: ['node_modules', 'src/js'],
		extensions: ['', '.js', '.jsx']
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader'],
		extensions: ['', '.js', '.scss', '.css']
	},

	module: {
		loaders: [
			{
				test: /\.(jsx|js)/,
				loaders: ['react-hot', 'babel'],
				include: `${__dirname}/src/js`
			},
			{
				test: /\.scss$/,
				loader: 'style!css!autoprefixer?browsers=last 2 version!sass',
				include: `${__dirname}/src/css`
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			MODULES: JSON.stringify([
				'account', 'settings'
			]),
			VERSION: JSON.stringify(dynamic.version),
			LOCALE: JSON.stringify('ru')
		}),
		new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru/),
		new webpack.ProvidePlugin({
			React: 'react'
		}),
		new webpack.NoErrorsPlugin(),
		// production use
		// new ChunkManifestPlugin({
		// 	manifestVariable: dynamic.manifestVariable,
		// 	filename: dynamic.filename,
		// }),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin()
	],

	devServer: {
		host: 'localhost',
		port: '8080',
		proxy: {
			'/page*': 'http://localhost:3000'
		},
		hot: true
	}
};
