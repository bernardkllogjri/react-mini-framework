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
            plugins: ["@babel/plugin-syntax-dynamic-import"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: aliases
  },
  entry: {
    index: base.concat("/packages/bootstrap/")
  },
  output: {
    path: base.concat("/dist/"),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[name].chunk.js"
  }
};
