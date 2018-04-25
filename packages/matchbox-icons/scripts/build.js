'use strict';

import { rollup } from 'rollup';
import { inputOptions, outputOptions } from './rollup';

async function build() {
  console.log('Starting Matchbox Icons Build...')
  const bundle = await rollup(inputOptions);

  for (let option of outputOptions) {
    console.log(`Writing ${option.format} bundle - ${option.file}`);
    await bundle.write(option);
  }

  console.log('Build Done.')
}

build();
