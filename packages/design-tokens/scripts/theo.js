const theo = require('theo');
const fs = require('fs');
const deepMap = require('../formats/deepMap.scss');
const map = require('../formats/map.scss');
const metaJs = require('../formats/meta.js');
const commonJs = require('../formats/common.js');

// Custom formats
theo.registerFormat('deep-map.scss', deepMap);
theo.registerFormat('map.scss', map);
theo.registerFormat('meta.js', metaJs);
theo.registerFormat('common.js', commonJs);
theo.registerTransform('web', ['color/hex']);

// Format sources
const deepMapSources = [
  { src: 'tokens/color.yml', prefix: 'color', output: 'color.deep-map.scss' },
];

const scssMapSources = [
  { src: 'tokens/border-radius.yml', output: 'border-radius.map.scss' },
  { src: 'tokens/border-width.yml', output: 'border-width.map.scss' },
  { src: 'tokens/box-shadow.yml', output: 'box-shadow.map.scss' },
  { src: 'tokens/media-query.yml', output: 'media-query.map.scss' },
  { src: 'tokens/motion-duration.yml', output: 'motion-duration.map.scss' },
  { src: 'tokens/motion-ease.yml', output: 'motion-ease.map.scss' },
  { src: 'tokens/font-family.yml', output: 'font-family.map.scss' },
  { src: 'tokens/font-size.yml', output: 'font-size.map.scss' },
  { src: 'tokens/font-weight.yml', output: 'font-weight.map.scss' },
  { src: 'tokens/line-height.yml', output: 'line-height.map.scss' },
  { src: 'tokens/sizing.yml', output: 'sizing.map.scss' },
  { src: 'tokens/spacing.yml', output: 'spacing.map.scss' },
  { src: 'tokens/z-index.yml', output: 'z-index.map.scss' },
];

const indexSources = ['common.js', 'custom-properties.css', 'meta.js'];

function success(src) {
  console.log(`Build done: ${src}`);
}

function throwError(error) {
  console.error(`Something went wrong:\n${error}`);
  process.exit(1);
}

function saveResults(result, output) {
  fs.mkdirSync('./dist', { recursive: true });
  fs.writeFileSync(`./dist/${output}`, result);
}

// Deep Maps
for (const source of deepMapSources) {
  theo
    .convert({
      transform: {
        type: 'web',
        file: source.src,
      },
      format: {
        type: 'deep-map.scss',
        options: { prefix: src.prefix },
      },
    })
    .then(result => {
      saveResults(result, source.output);
      success(source.src);
    })
    .catch(throwError);
}

// Normal Maps
for (const source of scssMapSources) {
  theo
    .convert({
      transform: {
        type: 'web',
        file: source.src,
      },
      format: {
        type: 'map.scss',
      },
    })
    .then(result => {
      saveResults(result, source.output);
      success(source.src);
    })
    .catch(throwError);
}

// Meta, CSS, and JS
for (const source of indexSources) {
  theo
    .convert({
      transform: {
        type: 'web',
        file: 'tokens/index.yml',
      },
      format: {
        type: source,
      },
    })
    .then(result => {
      saveResults(result, `index.${source}`);
      success(`index.${source}`);
    })
    .catch(throwError);
}
