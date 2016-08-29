/* global __dirname */

import tasks from './build';
import args from 'yargs';

tasks.register({
  debug: !args.argv.production,
	version: args.argv.version || 'DEV_VERSION',
	mainScriptName: 'start',
	moduleName: 'main',
  paths: {
    dist: './dist',
    distCss: './dist/css',
		distJs: './dist/js',
    src: './src',
    css: './src/css',
    node: './node_modules'
  },
  files: {
    indexHtml: './src/index.html',
		manifest: './dist/js/manifest.json',
		distIndexHtml: './dist/index.html',
    startJs: './src/js/start.js',
		webpackConfig: __dirname + '/webpack.config.babel.js'
  }
});
