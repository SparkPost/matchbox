'use strict';

import jsPlugins from './plugins/js';
import pkg from '../package.json';

export const inputOptions = {
  input: 'src/index.tsx',
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
    '@types/styled-system',
  ],
};

export const outputOptions = [
  {
    format: 'cjs',
    file: pkg.main,
    sourcemap: true,
  },
  {
    format: 'esm',
    file: pkg.module,
    sourcemap: true,
  },
];
