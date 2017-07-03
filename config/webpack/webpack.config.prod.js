const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/javascripts/index.js',
  },
  output: {
    path: './public/javascripts',
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-flow-strip-types'],
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: ['url-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify('production'),
        BROWSER: JSON.stringify(true)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
