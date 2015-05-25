'use strict';  
var webpack = require('webpack');  
// PATHS
//var PATHS = {  
//  build: __dirname + '/app'
//};
module.exports = {  
    entry: './app/index.js',
    output: {
      path: './',
      filename: 'bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        }
      ]
    }
};