'use strict';

import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer'
import reduceClasses from './reduceClasses';

const rollCss = ({ generateScopedName, extract = 'styles.css' }) => {
  return postcss({
    modules: { generateScopedName },
    minimize: { zindex: false },
    plugins: [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',
      })
    ],
    extensions: ['.scss'],
    extract
  });
}

const reduceCss = rollCss({ generateScopedName: reduceClasses });
export default [reduceCss];
