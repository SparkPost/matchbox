const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 2,
        },
      },
      {
        loader: 'postcss-loader',
        options: { plugins: () => [autoprefixer()] },
      },
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve = {
    alias: {
      '@sparkpost/matchbox-icons': path.resolve(__dirname, '../packages/matchbox-icons/src'),
      '@sparkpost/matchbox': path.resolve(__dirname, '../packages/matchbox/src'),
      '@sparkpost/design-tokens': path.resolve(__dirname, '../packages/design-tokens'),
    },
    modules: [path.join(__dirname, '../node_modules')],
  };

  return config;
};
