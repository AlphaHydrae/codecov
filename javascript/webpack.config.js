const { join: joinPath } = require('path');

const root = __dirname;

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/example.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ]
          }
        }
      }
    ]
  },
  output: {
    path: joinPath(root, 'dist'),
    filename: 'example.js'
  },
  resolve: {
    extensions: [ '.js' ]
  }
};
