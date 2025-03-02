const { override } = require("customize-cra");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = override((config) => {
  if (config.optimization) {
    // Enable tree-shaking by marking unused exports
    config.optimization.usedExports = true;

    if (config.optimization.minimizer) {
      // Modify the existing TerserPlugin options
      config.optimization.minimizer = config.optimization.minimizer.map(
        (plugin) => {
          if (plugin instanceof TerserPlugin) {
            return new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true, // Remove console logs
                  drop_debugger: true, // Remove debugger statements
                  unused: true, // Remove unused variables
                  dead_code: true, // Remove dead code
                },
                output: {
                  comments: false, // Remove comments
                },
              },
              extractComments: false, // Prevent generating LICENSE.txt
            });
          }
          return plugin;
        }
      );
    }
  }
  return config;
});
