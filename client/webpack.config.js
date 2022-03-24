const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "none",
  entry: path.join(__dirname, "src", "index.tsx"),
  context: path.join(__dirname),
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".mjs", ".json", ".js"],
  },
  ...(process.env.NODE_ENV === "production"
    ? {
        optimization: {
          minimize: true,
          minimizer: [new TerserPlugin()],
        },
      }
    : {}),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: "/node_modules/",
        options: { transpileOnly: true },
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
        exclude: /\.module\.css$/,
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: ["public"],
    }),
    new Dotenv({
      silent: true,
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./public/favicon.svg",
    }),
    ...(process.env.NODE_ENV === "production" ? [new CompressionPlugin()] : []),
  ],
  devServer: {
    static: {
      directory: "dist",
    },
    compress: true,
    port: 4000,
  },
};
