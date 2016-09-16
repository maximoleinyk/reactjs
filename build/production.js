import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default function(config) {
  return {
    context: config.src,

    entry: {
      start: './js/start'
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
          loaders: ['babel'],
          include: path.resolve(config.src, './js')
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)(\?.*$|$)/,
          loader: `file?name=fonts/[name].[ext]`
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!postcss!sass')
        }
      ]
    },

    plugins: [
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
      }),
      new webpack.DefinePlugin({
        MODULES: JSON.stringify(config.modules),
        VERSION: JSON.stringify('production'),
        LOCALE: JSON.stringify('ru'),
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new ExtractTextPlugin('css/styles.css', {
        allChunks: true
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    ]
  };
}
