'use strict';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
// import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import { DEFAULT_EXTENSIONS } from '@babel/core';

export default [
  nodeResolve(),
  babel({
    babelrc: false,
    exclude: 'node_modules/**',
    babelHelpers: 'runtime',
    extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
    presets: ['@babel/env', '@babel/react', '@babel/preset-typescript'],
    plugins: ['@babel/plugin-transform-object-rest-spread', '@babel/plugin-transform-class-properties'],
  }),
  // terser(), Fix me, causing `Error: kill EPERM`
  typescript({ tsconfig: './tsconfig.json' }),
];
