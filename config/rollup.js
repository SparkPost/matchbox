'use strict';

import cssPlugins from './rollup/css';
import jsPlugins from './rollup/js';

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
    'react-icon-base',
    'react-day-picker',
    'react-transition-group'
  ]
}

export const outputOptions = {
  format: 'cjs',
  file: 'matchbox.js'
}
