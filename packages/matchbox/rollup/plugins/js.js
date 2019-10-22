'use strict';

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default [
  resolve(),
  babel({
    babelrc: false,
    exclude: 'node_modules/**',
    externalHelpers: true,
    presets: [ '@babel/env', '@babel/react' ],
    plugins: [ '@babel/proposal-object-rest-spread', '@babel/proposal-class-properties' ]
  }),
  terser()
];
