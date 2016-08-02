import tasks from './build';
import yargs from 'yargs';

tasks.register({
  debug: yargs.argv.debug,
  paths: {
    source: './src',
    dist: './dist',
    css: './src/css',
    distCss: './dist/css',
    modules: './src/js/app'
  },
  files: {
    indexHtml: './src/index.html',
    moduleFile: 'main.js'
  },
  modules: [
    'account',
    'settings'
  ]
});
