const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
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
              configFile: 'tslint.json',
              tsConfigFile: 'tsconfig.json',
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
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    host: 'localhost',
    port: 9000,
    contentBase: path.join(__dirname, '../../public'),
  },
};
