'use strict';

import jsPlugins from './plugins/js';
import pkg from '../package.json'

export const inputOptions = {
  input: 'icons/index.js',
  plugins: [
    ...jsPlugins
  ],
  external: [
    'react',
    'react-dom',
    '@sparkpost/matchbox'
  ]
}

export const outputOptions = [
  {
    format: 'cjs',
    file: pkg.main
  },
  {
    format: 'es',
    file: pkg.module
  }
]
