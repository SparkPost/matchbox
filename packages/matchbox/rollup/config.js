'use strict';

import jsPlugins from './plugins/js';
import pkg from '../package.json';

export const inputOptions = {
  input: 'src/index.ts',
  plugins: [...jsPlugins],
  external: [
    'copy-to-clipboard',
    'react',
    'react-dom',
    'prop-types',
    'react-day-picker',
    'react-transition-group',
    'react-focus-lock',
    'react-scrolllock',
    'resize-observer-polyfill',
    '@sparkpost/matchbox-icons',
    '@sparkpost/design-tokens',
    '@styled-system/css',
    '@styled-system/prop-types',
    '@styled-system/props',
    'styled-components',
    'styled-system',
    'styled-normalize',
  ],
};

export const outputOptions = [
  {
    format: 'cjs',
    file: pkg.main,
  },
  {
    format: 'esm',
    file: pkg.module,
  },
];
