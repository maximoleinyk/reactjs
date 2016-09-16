/* global module __dirname require */
var path = require('path'),
webpack = require('webpack'),
autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /\.js$/,
        // do not include istanbul plugin to global babel config
        // it will break the build
        loader: 'babel?plugins[]=istanbul',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'style!css!postcss!sass',
        include: path.resolve(__dirname, '../src/css')
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?.*$|$)/,
        loader: `file?name=fonts/[name].[ext]`
      }
    ]
  },

  resolve: {
    alias: {
      css: path.resolve(__dirname, '../src/css'),
      app: path.resolve(__dirname, '../src/js/app'),
      common: path.resolve(__dirname, '../src/js/common')
    },
    extensions: ['', '.js', '.jsx', '.scss', '.css']
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
      MODULES: JSON.stringify([]),
      VERSION: JSON.stringify('test'),
      LOCALE: JSON.stringify('en')
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      jQuery: 'jquery',
      $: 'jquery',
      'window.Tether': 'tether'
    })
  ]
}
