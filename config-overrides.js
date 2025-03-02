const { override, addWebpackPlugin } = require('customize-cra');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = override(
  addWebpackPlugin(
    new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true, // Remove console logs
        },
      },
    })
  )
);
