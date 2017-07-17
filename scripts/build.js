'use strict';
const fs = require('fs-extra')

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'production';

import { rollup } from 'rollup';
import config from '../config/rollup';

rollup(config).then(( bundle ) => {
    return bundle.write({
      format: 'cjs',
      dest: 'index.js'
    });
  })
  .then(() => {
    fs.copy('styles.css', 'styles.scss', (err) => {
      if (err) return console.error(err)
    });
  })
  .then(() => console.log('Build Done.'));
