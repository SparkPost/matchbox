import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer'

const cssExportMap = {};

// Generate names
import { basename } from 'path';
import { camelCase } from 'change-case';
const cache = {
  files: {},
};

const matchboxScope = function(localName, filePath) {
  const file = cache.files[filePath] || {};
  const componentName = basename(filePath, '.css');

  const baseClass = prefix(componentName);
  let className = localName;

  console.log(localName, 'localName');

  if (className == null) {
    if (isComponent(localName)) {

      className = componentName === localName
        ? baseClass
        : child(baseClass, localName);

    } else if (isChild(localName)) {
      const [subcomponent, variation] = localName.split('-');
      const subcomponentName = child(baseClass, subcomponent);
      className = variation(subcomponentName, camelCase(variation));
    } else {
      className = variation(baseClass, camelCase(localName));
    }
  }

  file[localName] = className;
  cache.files[filePath] = file;

  console.log('-------');
  console.log(cache.files);

  return className;
}

const COMPONENT_REGEX = /^[A-Z]\w+$/;
const CHILD_REGEX = /^\w+-\w+$/;

const isComponent = (className) => COMPONENT_REGEX.test(className);
const isChild = (className) => CHILD_REGEX.test(className);

const prefix = (className) => `Matcbox-${className}`;
const child = (component, child) => `${component}__${child}`
const variation = (component, variation) => `${component}--${variation}`

// Actual rollup config
export default {
  entry: 'src/index.js',
  format: 'cjs',
  dest: 'index.js',
  plugins: [

    postcss({
      plugins: [
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[id] = exportTokens;
          },
          generateScopedName: matchboxScope
        }),
        autoprefixer(),
        cssnano()
      ],
      getExport (id) {
        return cssExportMap[id];
      },
      //sourceMap: false, // default value
      //extract: false, // default value
      extensions: ['.css'],  // default value
      extract: true
      // parser: sugarss
    }),

    commonjs(),

    // ES6
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'react' ],
      plugins: [ 'external-helpers' ]
    }),
  ]
};
