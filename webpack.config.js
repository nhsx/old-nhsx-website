const path = require('path');

module.exports = {
  entry: './app/scripts/main.js',
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    }],
  },
  output: {
    filename: 'main.bundle.min.js',
    path: path.resolve(__dirname, 'public/js/'),
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
