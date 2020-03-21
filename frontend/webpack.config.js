const path = require('path');
const merge = require('webpack-merge');

module.exports = (env, argv) => {
  let envConfig;
  if (argv.mode === 'development') {
    envConfig = require('./webpack.dev.js');
  } else {
    envConfig = {mode: 'production'};
  }

  return merge(envConfig, {
    entry: './app/app.js',
    output: {
      path: __dirname,
      filename: './src/main/resources/public/static/bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: path.join(__dirname, '.'),
          exclude: /(node_modules)/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }]
        },
        {
          test: /\.css$/,
          use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'}
          ]
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: './src/main/resources/public/static',
                publicPath: '/static',
                name: '[name].[ext]'
              }
            },
          ]
        }
      ]
    }
  })
};