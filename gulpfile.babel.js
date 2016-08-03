import tasks from './build';
import yargs from 'yargs';

tasks.register({
  debug: !yargs.argv.production,
  paths: {
    source: './src',
    dist: './dist',
    css: './src/css',
    distCss: './dist/css',
    modules: './src/js/app',
    bower: './bower_components'
  },
  files: {
    indexHtml: './src/index.html',
    moduleFile: 'main.js',
    startJs: './src/js/start.js'
  },
  modules: [
    'account',
    'settings'
  ]
});
