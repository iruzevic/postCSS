const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

const appPath = path.resolve(__dirname);

const outputJs = '[name]-[hash].js';
const outputCss = '[name]-[hash].css';

module.exports = {
  entry: `${appPath}/app/assets/webpack.js`,
  output: {
    path: `${appPath}/app/public`,
    filename: outputJs
  },

  module: {
    rules: [{
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [{
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: function() {
              return [
                require('precss'),
                autoprefixer,
              ];
            },
          },
        }, {
          loader: 'sass-loader'
        }],
      }),
    }]
  },

  plugins: [new ExtractTextPlugin('[name].css')]


  // {
  //   loader: 'postcss-loader',
  //   options: {
  //     plugins: function() {
  //       return [
  //         require('precss'),
  //         require('autoprefixer')
  //       ];
  //     },
  //   },
  // },
}
