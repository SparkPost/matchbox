'use strict';

import jsPlugins from './plugins/js';
import pkg from '../package.json'

export const inputOptions = {
  input: 'src/index.js',
  plugins: [
    ...jsPlugins
  ],
  external: [
    'react',
    'react-dom',
    'prop-types'
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
