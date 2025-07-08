'use strict';

import jsPlugins from './plugins/js.js';
import pkg from '../package.json' with { type: 'json' };

export const inputOptions = {
  input: 'src/index.ts',
  plugins: [...jsPlugins],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
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
