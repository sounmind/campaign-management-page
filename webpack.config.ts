/* eslint-disable import/no-extraneous-dependencies */

const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
require("dotenv").config();

const production = process.env.NODE_ENV === "production";

module.exports = {
  mode: production ? "production" : "development",
  devtool: "source-map",
  devServer: {
    proxy: {
      "/": {
        target: process.env.SERVER_URL,
        changeOrigin: true,
      },
    },
  },
  entry: {
    main: "./src/index.tsx",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
