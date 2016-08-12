import tasks from './build';
import yargs from 'yargs';

tasks.register({
  debug: !yargs.argv.production,
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
		webpackConfig: __dirname + '/webpack.config.js'
  },
  modules: [
    'account'
  ]
});
