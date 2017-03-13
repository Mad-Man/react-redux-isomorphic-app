const path = require("path");
const srcPath = path.join(__dirname, "src");
const buildPath = path.join(__dirname, "dist");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  context: srcPath,
  entry: [
    path.join(srcPath, "app", "client.jsx"),
    path.join(srcPath, "app/styles", "main.scss")
  ],
  output: {
    path: buildPath,
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    // Add ".ts" and ".tsx" as resolvable extensions.
    extensions: [".js", ".jsx"]
  },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: [
          /(node_modules|bower_components)/,
          './server.js',
          './server/'
        ],
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-2"],
          plugins: ["transform-decorators-legacy"],
        }
      }, {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          loader: "css-loader!sass-loader",
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css')
  ]
};