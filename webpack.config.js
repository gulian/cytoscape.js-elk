const path = require('path');
const pkg = require('./package.json');
const camelcase = require('camelcase');

let config = {
  entry: './src/index.js',
  devServer: {
    publicPath: '/dist/'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: pkg.name + '.js',
    library: camelcase(pkg.name),
    libraryTarget: 'umd'
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }]
  }
};

module.exports = config;
