'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'production';

import { rollup } from 'rollup';
import config from '../config/rollup';

rollup(config).then(( bundle ) => {
  bundle.write({
    format: 'cjs',
    dest: 'index.js'
  });
});
