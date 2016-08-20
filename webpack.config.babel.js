import path from 'path';
import fs from 'fs';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const dynamic = {
	version: 'DEVELOPMENT',
	locale: 'ru'
};

module.exports = {
	dynamic: dynamic,

	context: `${__dirname}/src`,

	entry: {
		start: './js/start'
	},

	devtool: 'source-map',

	output: {
		path: `${__dirname}/dist/`,
		publicPath: `/static/`,
		library: 'about', // wrap start.js with about variable
		filename: 'js/[name].js?hash=[hash]',
		chunkFilename: 'js/[name].js?hash=[hash]'
	},

	resolve: {
		alias: {
			css: `${__dirname}/src/css`,
			app: `${__dirname}/src/js/app`,
			common: `${__dirname}/src/js/common`
		},
		modulesDirectories: ['node_modules', 'src/js'],
		extensions: ['', '.js', '.jsx', '.scss']
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		moduleTemplates: ['*-loader'],
		extensions: ['', '.js', '.scss', '.css']
	},

	module: {
		loaders: [
			// js
			{
				test: /\.(jsx|js)$/,
				loaders: ['react-hot', 'babel'],
				include: `${__dirname}/src/js`
			},
			// scss
			{
				test: /\.scss$/,
				loader: 'style!css!postcss!sass?sourceMap',
				include: `${__dirname}/src/css`
			},
			// {
			// 	test: /\.scss$/,
			// 	loader: ExtractTextPlugin.extract("css!postcss!sass?data=$fa-font-path: \"~font-awesome/fonts\";", {disabled: true})
			// },
			// fonts
			{
				test: /\.(eot|svg|ttf|woff|woff2)(\?.*$|$)/,
				loader: `file?name=fonts/[name].[ext]`,
				include: `${__dirname}/node_modules/font-awesome/fonts`
			}
		]
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
		new webpack.DefinePlugin({
			MODULES: JSON.stringify([
				'account', 'settings'
			]),
			VERSION: JSON.stringify(dynamic.version),
			LOCALE: JSON.stringify(dynamic.locale)
		}),
		new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, new RegExp(dynamic.locale)),
		new webpack.ProvidePlugin({
			React: 'react'
		}),
		// new ExtractTextPlugin('css/styles.css', {
		// 	allChunks: true
		// }),
		new webpack.NoErrorsPlugin(),
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
