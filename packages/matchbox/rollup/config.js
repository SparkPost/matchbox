'use strict';

import cssPlugins from './plugins/css';
import jsPlugins from './plugins/js';
import pkg from '../package.json'

export const inputOptions = {
  input: 'src/index.js',
  plugins: [
    ...cssPlugins,
    ...jsPlugins
  ],
  external: [
    'react',
    'react-dom',
    'classnames',
    'prop-types',
    'react-transition-group',
    '@sparkpost/matchbox-icons'
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
