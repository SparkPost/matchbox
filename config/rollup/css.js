'use strict';

import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer'
import sass from 'node-sass';
import reduceClasses from './reduceClasses';

const cssExportMap = {};

const preprocessor = (content, id) => new Promise((resolve, reject) => {
  const result = sass.renderSync({ file: id });
  resolve({ code: result.css.toString() });
});

const rollCss = ({ generateScopedName, extract }) => {
  return postcss({
    preprocessor,
    plugins: [
      postcssModules({
        getJSON (id, exportTokens) {
          cssExportMap[id] = exportTokens;
        },
        generateScopedName: generateScopedName
      }),
      autoprefixer(),
      cssnano({ zindex: false })
    ],
    getExport (id) {
      return cssExportMap[id];
    },
    //sourceMap: false, // default value
    //extract: false, // default value
    extensions: ['.scss'],  // default value
    extract: extract
    // parser: sugarss
  });
}

// This function automatically BEMs CSS
// const scopeCss = rollCss({ generateScopedName: scopeClasses, extract: 'styles.css' });

const reduceCss = rollCss({ generateScopedName: reduceClasses, extract: 'styles.css' });
export default [reduceCss];
