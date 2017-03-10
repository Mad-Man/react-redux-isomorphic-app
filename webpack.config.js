const path = require("path");
const srcPath = path.join(__dirname, "src");
const buildPath = path.join(__dirname, "dist/public/js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
      './schemas/'
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
        loader: "css-loader!sass-loader"

      }),
    }, {
      test: /\.svg$/,
      loader: "url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]"
    }, {
      test: /\.woff$/,
      loader: "url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]"
    }, {
      test: /\.woff2$/,
      loader: "url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]"
    }, {
      test: /\.[ot]tf$/,
      loader: "url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]"
    }, {
      test: /\.eot$/,
      loader: "url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]"
    }]
  },
  plugins: [
    new ExtractTextPlugin('public/styles/main.css')
  ]
};