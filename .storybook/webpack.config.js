const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = (baseConfig, env, defaults) => {
  defaults.module.rules.push({
    test: /\.scss$/,
    use: [
      { loader: require.resolve('style-loader'), },
      {
        loader: require.resolve('css-loader'),
        options: {
          modules: true,
          importLoaders: 2,
          sourceMap: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        },
      },
      { loader: require.resolve('postcss-loader'), options: { plugins: () => [autoprefixer()]} },
      { loader: require.resolve('sass-loader') }
    ],
    include: path.resolve(__dirname, '..')
  });

  defaults.resolve = {
    alias: {
      '@sparkpost/matchbox-icons': path.resolve(__dirname, '../packages/matchbox-icons/src'),
      '@sparkpost/matchbox': path.resolve(__dirname, '../packages/matchbox/src')
    },
    modules: [path.join(__dirname, '../node_modules')]
  }

  return defaults;
};


// module.exports = ({ platform }, defaults) => ({
//   entry: `./storybook/index.${platform}.js`,
//   resolve: {
//     ...defaults.resolve,
//     modules: [path.join(__dirname, 'node_modules')]
//   }
// });
