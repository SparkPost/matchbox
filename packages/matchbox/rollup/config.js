'use strict';

import jsPlugins from './plugins/js';
import pkg from '../package.json';

export const inputOptions = {
  input: 'src/index.js',
  plugins: [...jsPlugins],
  external: [
    'react',
    'react-dom',
    'prop-types',
    'react-day-picker',
    'react-transition-group',
    'react-focus-lock',
    '@sparkpost/matchbox-icons',
    '@sparkpost/design-tokens',
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
