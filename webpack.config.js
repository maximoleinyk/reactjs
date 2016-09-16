/* global require module __dirname process */
require('babel-core/register');

var path = require('path');
var fs = require('fs');
var config = require('./build/' + process.env.NODE_ENV || 'development');

var getModules = function() {
  var modulesDir = path.resolve(__dirname, './src/js/app');

  return fs.readdirSync(modulesDir).filter(function(file) {
    return fs.statSync(path.join(modulesDir, file)).isDirectory();
  });
};

module.exports = config({
  src: path.resolve(__dirname, './src'),
  dist: path.resolve(__dirname, './dist'),
  modules: getModules()
});
