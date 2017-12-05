// We are using node's native package 'path'
// https://nodejs.org/api/path.html
  const path = require('path');

  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
  const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js'),
  };

// Webpack configuration
  module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    output: {
      path: paths.DIST,
      filename: 'app.bundle.js'
    },
    //Tell webpack to use html plugin
    // index.html us used as a template in which it'll inject bundled app.
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(paths.SRC, 'index.html'),
      }),
      new ExtractTextPlugin('style.bundle.css'),
    ],
    // Dev server configuration
    // Now it uses our "src" folder as a starting point
    // devServer: {
    //   contentBase: paths.SRC,
    // },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            'babel-loader',
          ],
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            use: 'css-loader',
          }),
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        }
      ],
    },
    //Enable importing JS files without specifying their extension

    //So we cant write:
    //import MyCopmonents from './my-component';
    //Instead of:
    //import MyCopmonents from './my-component.jsx';
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
