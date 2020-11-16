module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            modules: 'commonjs',
            debug: false,
          },
        ],
        '@babel/preset-react',
        'react-app',
      ],
      plugins: [
        '@babel/plugin-proposal-class-properties',
        ['babel-plugin-styled-components', { ssr: true, displayName: false, namespace: 'sc-' }],
      ],
    },
    production: {
      presets: [['@babel/preset-env'], '@babel/preset-react', 'react-app'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
    development: {
      presets: [['@babel/preset-env'], '@babel/preset-react', 'react-app'],
      plugins: ['@babel/plugin-proposal-class-properties'],
    },
  },
};
