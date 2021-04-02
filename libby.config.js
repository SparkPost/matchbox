// const path = require('path');

module.exports = {
  entries: () => require.context('./libby', true, /\.lib\.js$/),
  outputPath: 'libby-build',
  layout: 'libby/_layout.js',
  preview: 'libby/_preview.js',
  home: 'libby/_home.js',
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
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false, // See https://github.com/webpack/webpack/issues/11467
            },
          },
          {
            test: /\.(jpe?g|png|gif|svg|webm|webp|mp4)$/,
            exclude: /node_modules/,
            use: {
              loader: 'file-loader',
            },
          },
        ],
      },
      resolve: {
        alias: {
          '@sparkpost/matchbox-icons': '/packages/matchbox-icons/src',
          '@sparkpost/matchbox': '/packages/matchbox/src',
          '@sparkpost/design-tokens': '/packages/design-tokens',
          '@sparkpost/matchbox-media': '/packages/matchbox-media',
        },
        modules: ['./node_modules'],
      },
    };
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'gray',
        value: '#ebf0f5',
      },
      {
        name: 'black',
        value: '#2c353d',
      },
    ],
  },
};
