var webpack = require('webpack');
var HTMLWP = require('html-webpack-plugin');

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
        loader: 'style!css?modules!postcss'
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
  ],
}