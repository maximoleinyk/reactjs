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
		start: './js/start.js'
	},

	devtool: 'source-map',

	output: {
		path: `${__dirname}/dist/js`,
		publicPath: `/static/js/`,
		library: 'about', // wrap start.js with about variable
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js'
	},

	resolve: {
		alias: {
			app: `${__dirname}/src/js/app`,
			common: `${__dirname}/src/js/common`
		},
		modulesDirectories: ['node_modules', 'src/js'],
		extensions: ['', '.js', '.jsx']
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader'],
		extensions: ['', '.js']
	},

	module: {
		loaders: [
			{
				test: /\.(jsx|js)/,
				loaders: ['babel'],
				exclude: /node_modules/
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
		new ChunkManifestPlugin({
			manifestVariable: dynamic.manifestVariable,
			filename: dynamic.filename,
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin()
	]
};
