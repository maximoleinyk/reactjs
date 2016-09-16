/* global require module __dirname process */
require('babel-core/register');

var path = require('path');
var fs = require('fs');
var environment = process.env.NODE_ENV;
var name = environment === 'production' ? 'production' : 'development';
var getModules = function() {
  var modulesDir = path.resolve(__dirname, './src/js/app');

  return fs.readdirSync(modulesDir).filter(function(file) {
    return fs.statSync(path.join(modulesDir, file)).isDirectory();
  });
};

module.exports = require('./build/' + name)({
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),

  resolve: {
    alias: {
      css: path.resolve(__dirname, './src/css'),
      app: path.resolve(__dirname, './src/js/app'),
      common: path.resolve(__dirname, './src/js/common')
    },
    modulesDirectories: ['node_modules', 'src/js'],
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  },

  resolveModule: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader'],
    extensions: ['', '.js', '.scss', '.css']
  },

  modules: getModules()
});
