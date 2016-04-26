var webpack = require('webpack');
var HTMLWP = require('html-webpack-plugin');
var ETP = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /.css$/,
        loader: ETP.extract('style', 'css?modules!postcss')
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  plugins: [
    new HTMLWP({
      template: __dirname + '/app/index.tmpl.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ETP('style.css');
  ]
}
