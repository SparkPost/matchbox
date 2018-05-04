'use strict';

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default [
  resolve(),
  babel({
    babelrc: false,
    exclude: 'node_modules/**',
    presets: [ [ 'es2015', { modules: false } ], 'react' ],
    plugins: [ 'external-helpers', 'transform-object-rest-spread', 'transform-class-properties' ]
  }),
  uglify()
];
