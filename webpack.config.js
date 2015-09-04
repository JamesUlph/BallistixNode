var Webpack = require('webpack');
var path = require('path');
var appPath = path.resolve(__dirname, 'app');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');

var config = {
  context: __dirname,
  devtool: 'eval-source-map',
 entry: {
    app: [path.resolve(appPath, 'main.js')],
    vendor: ["react"],
  },

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel?optional=es7.decorators',
      exclude: [nodeModulesPath]
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    },{test:/\.json$/,loader:'raw'}]
  },
  plugins: [
  new Webpack.HotModuleReplacementPlugin(),
  new Webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};

module.exports = config;
