const __BASE__CONFIG__ = require("../base/config");
module.exports = {
  ...__BASE__CONFIG__,
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    stats: {
      children: false, // Hide children information
      maxModules: 0 // Set the maximum number of modules to be shown
    },
    port: 9000,
    host: "0.0.0.0",
    publicPath: "/src",
    contentBase: "./dist",
    historyApiFallback: true,
    compress: true
  }
};
