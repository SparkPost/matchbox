'use strict';
const fs = require('fs-extra')

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'production';

import { rollup } from 'rollup';
import { inputOptions, outputOptions } from '../config/rollup';

async function build() {
  console.log('Starting Build...')
  const bundle = await rollup(inputOptions);
  await bundle.write(outputOptions);
  fs.copy('styles.css', 'styles.scss');
  console.log('Build Done.')
}

build();
