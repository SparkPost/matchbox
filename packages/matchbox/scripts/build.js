'use strict';
const fs = require('fs-extra')

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'production';

import { rollup } from 'rollup';
import { inputOptions, outputOptions } from './rollup';

async function build() {
  console.log('Starting Matchbox Build...')
  const bundle = await rollup(inputOptions);

  for (let option of outputOptions) {
    console.log(`Writing ${option.format} bundle - ${option.file}`);
    await bundle.write(option);
  }

  fs.copy('styles.css', 'styles.scss');
  console.log('Build Done.')
}

build();
