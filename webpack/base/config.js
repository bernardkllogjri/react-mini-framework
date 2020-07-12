const path = require("path");
const base = path.resolve(__dirname, "../../");
const aliases = require("../../init/aliases");
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"],
            plugins: ["@babel/plugin-syntax-dynamic-import"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|ttf|woff2|woff|eot|svg)$/i,
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: aliases,
  },
  entry: {
    index: base.concat("/packages/bootstrap/"),
  },
  output: {
    path: base.concat("/dist/src"),
    publicPath: "/src",
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
};
