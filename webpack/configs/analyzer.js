const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const __DEV__ = require("./dev");

module.exports = {
  ...__DEV__,
  plugins: [new BundleAnalyzerPlugin()]
};
