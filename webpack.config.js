const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    extensions: [
      '.js',
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
