var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './app/html/app.html',
    './app/js/app.jsx'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'app/html'),
        loader: 'file?name=[path][name].[ext]&context=app/html',
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'app/js'),
        loader: 'babel',
        query: {
          presets: ['react'],
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass'),
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  devtool: 'source-map',
  plugins: [ new ExtractTextPlugin('style.css', { allChunks: true }) ],
};
