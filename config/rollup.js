'use strict';

import cssPlugins from './rollup/css';
import jsPlugins from './rollup/js';

export default {
  entry: 'src/index.js',
  plugins: [
    cssPlugins,
    ...jsPlugins
  ],
  external: ['react', 'classnames', 'prop-types'],
};
