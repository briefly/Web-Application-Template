'use strict';

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    AppCachePlugin = require('appcache-webpack-plugin'),
    Clean = require('clean-webpack-plugin')

module.exports = {
  entry: {
    vendor: [],
    app: ['webpack-dev-server/client?http://0.0.0.0:8080','webpack/hot/only-dev-server','./lib/index.js']
  },
  output: {
    path: './build',
    filename: '[hash].bundle.js',
    publicPath: process.env.BRIEFLY_WEBPACK_PUBLIC_PATH || ""
  },
  module: {
    preloader: [
      {
        test: /\.jsx$/,
        loader: "flowcheck"
      },
      {
        test: /\.js$/,
        loader: "flowcheck"
      }
    ],

    loaders: [
      {
        test: /\.scss$/,
        loader: "style/useable!css!autoprefixer!sass"
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "react-hot!babel?cacheDirectory=true"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "react-hot!babel?cacheDirectory=true"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Briefly Mesh Working System',
      filename: 'index.html'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    //new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new AppCachePlugin({
      cache: [],
      network: null,
      fallback: []
    }),
    new Clean(['build'])
  ]
}