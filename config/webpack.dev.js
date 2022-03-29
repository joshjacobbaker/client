const path = require("path")

const mode = process.env.NODE_ENV === "production" ? "production" : "development"

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  mode: mode,
  devtool: "source-map",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    clean: true,
    assetModuleFilename: "images/[name][ext][query]",
  },
  devServer: {
    static: path.resolve(__dirname, "../dist"),
    client: {
      overlay: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.css$/,
        type: "asset/resource",
        generator: {
          filename: "styles/[name][ext][query]",
        },
      },
      {
        test: /\.(jpg|png|gif)$/,
        type: "asset/resource",
        // generator: {
        //   filename: "images/[hash][ext][query]",
        // },
      },
      {
        test: /\.html/,
        type: "asset/resource",
        generator: {
          filename: "[name][ext][query]",
        },
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
