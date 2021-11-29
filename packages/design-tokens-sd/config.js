const { mapGet, utils, colorMapGet } = require('./templates/scss-functions');

module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    // Generates css custom properties
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [
        // Generates scss maps
        {
          destination: 'maps.scss',
          format: 'scss/map-deep',
          mapName: 'matchbox-tokens',
        },
        // Generates scss map functions
        {
          destination: 'tokens.scss',
          format: 'scss/functions',
        },
      ],
    },
  },
  format: {
    'scss/functions': (args) => {
      const keys = Object.keys(args.dictionary.tokens);
      const rootFontSize = args.dictionary.allTokens.find(({ name }) => name === 'font-size-root');

      const functions = keys
        .map((key) => {
          return key !== 'color' ? mapGet(key) : colorMapGet();
        })
        .join('');
      return `${utils(rootFontSize)}\n${functions}`;
    },
  },
};
