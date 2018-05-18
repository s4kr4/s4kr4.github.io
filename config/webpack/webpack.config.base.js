const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    bundle: path.join(__dirname, '../../src/index.tsx'),
  },
  output: {
    path: path.join(__dirname, '../../public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true,
              fix: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader',
      },
      {
        test: /\.(jpg|png)$/,
        use: 'url-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
};
