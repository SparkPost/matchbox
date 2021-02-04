const path = require('path');

module.exports = {
  // Required
  entries: () => require.context('./libby', true, /\.libby\.js$/),

  // Optional
  outputPath: 'libby-build',
  layout: 'libby/Layout.js',
  openBrowser: true,
  port: 9001,
  title: 'Matchbox',
  webpackConfig: () => {
    return {
      module: {
        rules: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
              },
            },
          },
        ],
      },
      resolve: {
        alias: {
          '@sparkpost/matchbox-icons': path.resolve(__dirname, './packages/matchbox-icons/src'),
          '@sparkpost/matchbox': path.resolve(__dirname, './packages/matchbox/src'),
          '@sparkpost/design-tokens': path.resolve(__dirname, './packages/design-tokens'),
          '@sparkpost/matchbox-media': path.resolve(__dirname, './packages/matchbox-media'),
        },
        modules: [path.join(__dirname, './node_modules')],
      },
    };
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'gray',
        value: '#ebf0f5',
      },
    ],
  },
};
