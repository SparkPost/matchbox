'use strict';

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

import cssPlugins from './css';

export default {
  entry: 'src/index.js',
  plugins: [
    cssPlugins,
    // commonjs(),
    resolve(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    uglify()
  ],
  external: ['react'],
};
