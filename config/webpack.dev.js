const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const mode = process.env.NODE_ENV === "production" ? "production" : "development"

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "../src/index.js"),
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "auto",
    clean: true,
    assetModuleFilename: "images/[name].[hash][ext][query]",
  },
  mode: mode,
  devtool: "source-map",
  devServer: {
    static: { directory: path.join(__dirname, "dist") },
    client: {
      overlay: true,
    },
    compress: true,
    // port: 3000,
    historyApiFallback: true,
    hot: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      maxInitialRequests: 20, // for HTTP2
      maxAsyncRequests: 20, // for HTTP2
      minSize: 40, // for example only: chosen to match 2 modules
      // omit minSize in real use case to use the default of 30kb
    },
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html", scriptLoading: "defer", inject: "body" }), new MiniCssExtractPlugin({ filename: "styles/[name].[hash].css", chunkFilename: "styles/[id].[hash].css" }), new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ["@babel/preset-env", "@babel/preset-react"],
          // },
        },
      },
      {
        test: /\.s?[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
        // type: "asset/resource",
        // generator: {
        //   filename: "styles/[name][ext][query]",
        // },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset/resource",
        // generator: {
        //   filename: "images/[hash][ext][query]",
        // },
      },
    ],
  },
}

// {
//   test: /\.html$/,
//   use: [
//     {
//       loader: "file-loader",
//       options: {
//         name: "[name].html",
//       },
//     },
//     {
//       loader: "extract-loader",
//     },
//     {
//       loader: "html-loader",
//       // options: {
//       //   attrs: ["img:src"],
//       // },
//     },
//   ],
//   type: "javascript/auto",
// },
