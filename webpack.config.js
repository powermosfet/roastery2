var path = require('path');

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
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
};
