'use strict';

import jsPlugins from './plugins/js';
import pkg from '../package.json';

export const inputOptions = {
  input: 'src/index.ts',
  plugins: [...jsPlugins],
  external: ['react', 'react-dom', 'prop-types'],
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
