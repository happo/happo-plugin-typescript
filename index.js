const tsLoader = require.resolve('ts-loader');

module.exports = function happoPluginTypescript() {
  return {
    customizeWebpackConfig: config => {
      config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: tsLoader,
          },
        ],
      });

      return config;
    },
  };
};
