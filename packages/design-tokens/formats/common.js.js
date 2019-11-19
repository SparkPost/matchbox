const { getCommonJsName } = require('./utils');

function map(result) {
  const { props } = result.toJS();
  const renderProp = (prop) => `"${getCommonJsName(prop.name, prop.type)}": "${prop.value}"`;
  return `module.exports = {${props.map(renderProp)}}`;
}

module.exports = map;
