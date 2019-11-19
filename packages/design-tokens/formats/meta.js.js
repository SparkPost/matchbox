const { getPalette, getName, kebabToFriendly, getCommonJsName } = require('./utils');

function map(result) {
  const { props, aliases } = result.toJS();
  const baseline = Number(aliases.DEFAULT_BASE.value.replace('px', ''));

  function renderProp(prop) {
    let scssMapGet = `${prop.type}(${getName(prop.name)})`;
    const friendly = kebabToFriendly(prop.name);

    // Hides 'base' from function arguments on nested maps
    // Only on Color White, a map with only one key
    if (prop.type === 'color') {
      scssMapGet = prop.singleKey
        ? `color(${getPalette(prop.name, 'color')})` // Display default usage
        : `color(${getPalette(prop.name, 'color')}, ${getName(prop.name)})`;
    }

    // Creates pixel values for rem tokens such as font size or spacing
    function declarePixelValues() {
      if (!prop.value.includes('rem')) {
        return '';
      }

      const value = Number(prop.value.replace('rem', '')) * baseline;
      return `"pixel_value": "${value}px", "pixel_value_unitless": "${value}"`;
    }

    return (`{
      "category": "${prop.category}",
      "css": "--${prop.name}",
      "friendly": "${friendly}",
      "javascript": "${getCommonJsName(prop.name, prop.type)}",
      "name": "${prop.name}",
      "scss": "${scssMapGet}",
      "type": "${prop.type}",
      "value": "${prop.value}",
      ${declarePixelValues()}
    }`);
  }

  return `module.exports = [${props.map(renderProp)}]`;
}

module.exports = map;
