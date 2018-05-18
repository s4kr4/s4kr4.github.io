const merge = require('webpack-merge');
const path = require('path');

const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader',
      },
    ]
  },
  devServer: {
    host: 'localhost',
    port: 9000,
    contentBase: path.join(__dirname, '../../public'),
  },
});
