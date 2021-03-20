"use strict";

var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var path = require("path");

var HtmlWebPackPlugin = require("html-webpack-plugin");

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_module$exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    open: true,
    hot: true,
    port: 8080
  },
  mode: 'development'
}, _defineProperty(_module$exports, "devServer", {
  historyApiFallback: true
}), _defineProperty(_module$exports, "module", {
  rules: [{
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader"
    }
  }, {
    test: /\.html$/,
    use: [{
      loader: "html-loader"
    }]
  }, {
    test: /\.(s*)css$/,
    use: [{
      loader: MiniCssExtractPlugin.loader
    }, 'css-loader', 'sass-loader']
  }, {
    test: /\.(png|gif|jpg)$/,
    use: [{
      loader: 'file-loader',
      options: {
        name: 'assets/[hash].[ext]'
      }
    }]
  }]
}), _defineProperty(_module$exports, "plugins", [new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
}), new MiniCssExtractPlugin({
  filename: 'assets/[name].css'
})]), _module$exports);