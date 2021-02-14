const { join: joinPath } = require('path');

const root = __dirname;

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          '@jsdevtools/coverage-istanbul-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: [ '@babel/preset-env' ]
            }
          }
        ]
      }
    ]
  },
  output: {
    path: joinPath(root, 'dist')
  },
  resolve: {
    extensions: [ '.js' ]
  }
};
