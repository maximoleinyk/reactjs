/* global require __dirname module process */
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var getModules = function() {
  var modulesDir = __dirname + '/src/js/app';

  return fs.readdirSync(modulesDir).filter(function(file) {
    return fs.statSync(path.join(modulesDir, file)).isDirectory();
  });
};

var config = {
  context: __dirname + '/src',

  entry: {
    start: './js/start'
  },

  output: {
    path: __dirname + '/dist/',
    publicPath: '/static/',
    library: 'about', // wrap start.js with about variable
    filename: 'js/[name].js?hash=[hash]',
    chunkFilename: 'js/[name].js?hash=[hash]'
  },

  resolve: {
    alias: {
      css: __dirname + '/src/css',
      app: __dirname + '/src/js/app',
      common: __dirname + '/src/js/common'
    },
    modulesDirectories: ['node_modules', 'src/js'],
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader'],
    extensions: ['', '.js', '.scss', '.css']
  },

  sassLoader: {
    data: '$fa-font-path: "~font-awesome/fonts";'
  },

  postcss: function() {
    return [autoprefixer({
      browsers: ['last 2 version']
    })];
  },

  eslint: {
    configFile: '.eslintrc'
  },

  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel', 'eslint'],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    // new FlowStatusWebpackPlugin({
    //   failOnError: true
    // }),
    new webpack.ProvidePlugin({
      React: 'react',
      jQuery: 'jquery',
      $: 'jquery',
      'window.Tether': 'tether'
    }),
    new webpack.ContextReplacementPlugin(
      /node_modules\/moment\/locale/,
      new RegExp('ru')
    ),
    new webpack.optimize.CommonsChunkPlugin({
      children: true
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack application',
      filename: 'index.html',
      template: './index.html',
      favicon: './favicon.ico',
      minify: {
        html5: true,
        removeComments: true,
        useShortDoctype: true,
        removeTagWhitespace: true,
        removeStyleLinkTypeAttributes: true,
        removeScriptTypeAttributes: true,
        removeRedundantAttributes: true,
        removeOptionalTags: true,
        processConditionalComments: true,
        minifyCSS: true,
        minifyJS: true,
        keepClosingSlash: true,
        collapseWhitespace: true
      },
      hash: true
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      MODULES: JSON.stringify(getModules()),
      VERSION: JSON.stringify('PRODUCTION'),
      LOCALE: JSON.stringify('ru'),
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('css/styles.css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.DedupePlugin()
  ]);

  config.module.loaders = [
    {
      test: /\.(jsx|js)$/,
      loaders: ['babel'],
      include: __dirname + '/src/js'
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)(\?.*$|$)/,
      loader: 'file?name=fonts/[name].[ext]'
    },
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('css!postcss!sass')
    }
  ]

  config.eslint = {
    failOnError: true
  };

} else {
  config.devtool = 'source-map';

  config.devServer = {
    host: 'localhost',
    port: '8080',
    proxy: [
      {
        path: '/page*',
        target: 'http://localhost:3000'
      },
      {
        path: '/api*',
        target: 'http://localhost:3000'
      }
    ]
  };

  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      MODULES: JSON.stringify(getModules()),
      VERSION: JSON.stringify('DEVELOPMENT-0.0.1'),
      LOCALE: JSON.stringify('ru')
    })
  ]);

  config.module.loaders = [
    {
      test: /\.(jsx|js)$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    },
    {
      test: /\.(eot|svg|ttf|woff|woff2)(\?.*$|$)/,
      loader: 'file?name=fonts/[name].[ext]'
    },
    {
      test: /\.scss$/,
      loader: 'style!css!postcss!sass?sourceMap',
      include: __dirname + '/src/css'
    }
  ];
}

module.exports = config;
