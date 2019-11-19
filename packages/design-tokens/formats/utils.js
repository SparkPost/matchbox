function getName(name, prefix) {
  const noPrefix = name.replace(`${prefix}-`, '').split('-');
  return noPrefix.pop();
}

function getPalette(name, prefix) {
  return name.replace(`${prefix}-`, '').split('-').shift();
}

function groupByPalette(props, prefix) {
  const withPalette = props.map((prop) => ({
    ...prop,
    palette: getPalette(prop.name, prefix)
  }
  ));

  const groupedByPalette = withPalette.reduce((acc, prop) => {
    if (!acc[prop.palette]) {
      acc[prop.palette] = [prop];
    } else {
      acc[prop.palette].push(prop);
    }

    return acc;
  }, {});

  return groupedByPalette;
}

function kebabToCamel(str) {
  return str.replace(/-([a-z|0-9])/g, (g) => g[1].toUpperCase());
}

function kebabToFriendly(str) {
  const r = str.replace(/-([a-z|0-9])/g, (g) => ` ${g[1].toUpperCase()}`);
  return r.charAt(0).toUpperCase() + r.slice(1);
}
/**
 * Returns a camel cased name from a kebab cased string,
 * with a period(.) before token variant
 * @example
 *   getCommonJsName('font-size-500', 'font-size')
 *   // 'fontsize_500'
 */
function getCommonJsName(str, type) {
  const variantOrPalette = str.replace(`${type}-`, '');
  const parts = variantOrPalette.split('-');

  const prefix = kebabToCamel(type);
  const getVariant = (str) => str === 'base' ? '' : `_${str}`;

  if (parts.length === 1) {
    return `${prefix}${getVariant(parts.pop())}`;
  }

  return `${prefix}_${parts[0]}${getVariant(parts.pop())}`;
}

module.exports = {
  getPalette,
  getName,
  getCommonJsName,
  groupByPalette,
  kebabToCamel,
  kebabToFriendly
};
