const __BASE__CONFIG__ = require("../base/config");
module.exports = {
  ...__BASE__CONFIG__,
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    port: 9000,
    host: "0.0.0.0",
    publicPath: "/src",
    contentBase: "./dist",
    historyApiFallback: true,
    compress: true,
    hot: true,
    hotOnly: true
  }
};
