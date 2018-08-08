const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './app.js',
  },
  output: {
    filename: './build.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            [' es2015 ', { modules: false }],
                    ]
                }
            }
        ]
    }
}
