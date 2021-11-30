const { mapGet, utils, colorMapGet } = require('./templates/scss-functions');
const { toSnake, toCamel, toFriendly } = require('./utils/utils');
const transforms = require('style-dictionary/lib/common/transforms');

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
    // Generates JS files in snake case
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      transforms: ['name/cti/snake'],
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/module-flat',
        },
      ],
    },
    // Generates JS files in the old format of snake & camel using a custom transform
    js_legacy: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      transforms: ['name/cti/legacy'],
      files: [
        {
          destination: 'tokens.legacy.js',
          format: 'javascript/module-flat',
        },
      ],
    },
    // Generates meta JS file
    js_meta: {
      transformGroup: 'js',
      buildPath: 'dist/meta/',
      files: [
        {
          destination: 'meta.js',
          format: 'javascript/meta',
        },
      ],
    },
  },
  transform: {
    'name/cti/legacy': {
      type: 'name',
      transformer: (token) => {
        const [category, ...rest] = token.path;
        return `${toCamel(category)}_${toSnake(rest.join('-'))}`;
      },
    },
  },
  format: {
    'scss/functions': (args) => {
      const keys = Object.keys(args.dictionary.tokens);
      const rootFontSize = args.dictionary.allTokens.find(({ name }) => name === 'font-size-root');
      const functions = keys.map((key) => (key !== 'color' ? mapGet(key) : colorMapGet())).join('');
      return `${utils(rootFontSize)}\n${functions}`;
    },
    'javascript/meta': (args) => {
      const all = args.dictionary.allTokens;

      const tokens = all
        .map((token) => {
          const { path, value, pixel_value } = token;
          const [head, ...tail] = path;

          return JSON.stringify({
            category: head,
            css: `--${path.join('-')}`,
            friendly: toFriendly(path.join(' ')),
            javascript: transforms['name/cti/snake'].transformer(token, {}),
            name: path.join('-'),
            pixel_value: pixel_value,
            pixel_value_unitless: !!pixel_value ? pixel_value.replace(/px$/, '') : undefined,
            scss: `${head}(${tail.join(',')})`,
            system: tail.join('.'),
            type: head,
            value: value,
          });
        })
        .join(',\n');

      return `module.exports = [${tokens}]`;
    },
  },
};
