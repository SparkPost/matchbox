'use strict';

import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer'
import sass from 'node-sass';
import scopeClasses from './scopeClasses';

const cssExportMap = {};

const sassProcess = (content, id) => new Promise((resolve, reject) => {
  const result = sass.renderSync({ file: id });
  resolve({ code: result.css.toString() });
});

export default postcss({
  sassProcess,
  plugins: [
    postcssModules({
      getJSON (id, exportTokens) {
        cssExportMap[id] = exportTokens;
      },
      generateScopedName: scopeClasses
    }),
    autoprefixer(),
    cssnano()
  ],
  getExport (id) {
    return cssExportMap[id];
  },
  //sourceMap: false, // default value
  //extract: false, // default value
  extensions: ['.scss'],  // default value
  extract: 'styles.css'
  // parser: sugarss
});
