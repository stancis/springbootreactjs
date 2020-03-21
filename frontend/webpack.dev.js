const path = require('path');

module.exports = {
  devtool: 'source-map',
  cache: true,
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'src/main/resources/public'),
    historyApiFallback: true,
    port: 8081,
    open: true,
    liveReload: true,
    watchContentBase: true,
    proxy: {
      '/api': 'http://localhost:8080'
    }
  }
};