'use strict';

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';

export default [
  resolve(),
  babel({
    babelrc: false,
    exclude: 'node_modules/**',
    externalHelpers: true,
    extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
    presets: ['@babel/env', '@babel/react', '@babel/preset-typescript'],
    plugins: ['@babel/proposal-object-rest-spread', '@babel/proposal-class-properties'],
  }),
  terser(),
  typescript({}),
];
