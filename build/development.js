import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default function (config) {
  return {
    context: config.src,

    entry: {
      start: './js/start',
      vendor: [
        'react',
        'jquery',
        'moment',
        'react-redux',
        'history',
        'react-dom',
        'react-router',
        'react-redux',
        'redux',
        'redux-thunk',
        'tether',
        'whatwg-fetch',
        'babel-polyfill',
        'bootstrap/dist/js/bootstrap'
      ]
    },

    devtool: 'source-map',

    devServer: {
      host: 'localhost',
      port: '8080',
      proxy: [
        {
          path: '/page',
          target: 'http://localhost:3000'
        },
        {
          path: '/api',
          target: 'http://localhost:3000'
        }
      ]
    },

    output: {
      path: config.dist,
      publicPath: `/static/`,
      library: 'about', // wrap start.js with about variable
      filename: 'js/[name].js?hash=[hash]',
      chunkFilename: 'js/[name].js?hash=[hash]'
    },

		resolve: {
	    alias: {
	      css: path.resolve(config.src, './css'),
	      app: path.resolve(config.src, './js/app'),
	      common: path.resolve(config.src, './js/common')
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

    postcss() {
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
      ],
      loaders: [
        {
          test: /\.(jsx|js)$/,
          loaders: ['react-hot', 'babel'],
          exclude: /node_modules/
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)(\?.*$|$)/,
          loader: `file?name=fonts/[name].[ext]`
        },
        {
          test: /\.scss$/,
          loader: 'style!css!postcss!sass?sourceMap',
          include: path.resolve(config.src, './css')
        }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        MODULES: JSON.stringify(config.modules),
        VERSION: JSON.stringify('development'),
        LOCALE: JSON.stringify('ru')
      }),
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
        name: 'vendor',
        filename: 'js/vendor.js',
        minChunks: Infinity
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
}
