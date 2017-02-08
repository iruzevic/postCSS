const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const appPath = path.resolve(__dirname);

const outputJs = '[name].js';
const outputCss = 'css/[name].css';
const outputFile = '[name].[ext]';

module.exports = {
  watch: true,
  stats: {
        // Configure the console output
        errorDetails: true, //this does show errors
        colors: true,
        modules: true,
        reasons: true
    },
  entry: {
    application: [`${appPath}/app/assets/webpack.js`]
  },
  output: {
    path: `${appPath}/app/public`,
    filename: outputJs
  },

  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: `file-loader?name=images/${outputFile}`
      },
      {
        test: /\.(eot|ttf|woff2?)$/,
        loader: `file-loader?name=fonts/${outputFile}`
      },
      {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
      }),
    }
  ]
  },

  plugins: [
    new ExtractTextPlugin(outputCss)
  ]

}
