const path = require('path');
const { mapGet, typographyMapGet } = require('./templates');

function map(result) {
  const { props, meta } = result.toJS();
  const basename = path.basename(meta.file, '.yml');

  const renderProp = prop => `${prop.name}: (${prop.value})`;

  return `
    $${basename}-map: (
      ${props.map(renderProp)}
    );
    ${(basename === 'font-size' ? typographyMapGet : mapGet)(basename, props)}
  `;
}

module.exports = map;
