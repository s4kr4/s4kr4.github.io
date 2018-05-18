const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    bundle: path.join(__dirname, '../../src/typescript/index.tsx'),
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
  plugins: [
    new UglifyJsPlugin(),
  ],
};
