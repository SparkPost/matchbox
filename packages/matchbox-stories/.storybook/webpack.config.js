const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  baseConfig.module.rules.push({
    test: /\.css$/,
    use: [
      { loader: require.resolve('style-loader') },
      {
        loader: require.resolve('css-loader'),
        options: { modules: false }
      }
    ],
    include: path.resolve(__dirname, '..')
  });

  return baseConfig;
};
