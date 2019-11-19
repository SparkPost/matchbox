const path = require('path');
const { deepMapGet } = require('./templates');
const { groupByPalette, getName } = require('./utils');

function deepMap(result) {
  const { props, meta, options } = result.toJS();
  const basename = path.basename(meta.file, '.yml');
  const palettes = groupByPalette(props, options.prefix);

  const renderPalette = (palette) => `${palette}: (
    ${palettes[palette].map((prop) =>
    `${getName(prop.singleKey ? `${prop.name}-base` : prop.name, options.prefix)}: ${prop.value}`)
}
  )`;

  return `
    $${basename}-map: (
      ${Object.keys(palettes).map(renderPalette)}
    );
    ${deepMapGet(basename)}
  `;
}

module.exports = deepMap;
