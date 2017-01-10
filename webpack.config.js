var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
    './src/css/main.css'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    { test: /\.jsx$/, loaders: ["react-hot", "jsx-loader"], include: path.join(__dirname, "src") },
    {test: /\.jsx?$/, loader: 'babel-loader'},
    { test: /\.css$/, loader: "style-loader!css-loader" },
    { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },

    {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
    }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
    }

  ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  }
};
