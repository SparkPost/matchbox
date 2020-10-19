const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  // Export a function. Accept the base config as the only param.
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve = {
      alias: {
        '@sparkpost/matchbox-icons': path.resolve(__dirname, '../packages/matchbox-icons/src'),
        '@sparkpost/matchbox': path.resolve(__dirname, '../packages/matchbox/src'),
        '@sparkpost/design-tokens': path.resolve(__dirname, '../packages/design-tokens'),
        '@sparkpost/matchbox-media': path.resolve(__dirname, '../packages/matchbox-media'),
        react: path.resolve(__dirname, '../node_modules/react'),
      },
    };

    // Return the altered config
    return config;
  },
};
