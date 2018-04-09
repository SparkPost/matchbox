'use strict';

import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer'
import reduceClasses from './reduceClasses';

const rollCss = ({ generateScopedName, extract = 'styles.css' }) => {
  return postcss({
    modules: { generateScopedName },
    minimize: { zindex: false },
    plugins: [autoprefixer()],
    extensions: ['.scss'],
    extract
  });
}

const reduceCss = rollCss({ generateScopedName: reduceClasses });
export default [reduceCss];
