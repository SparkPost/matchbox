
let warned = {};

/**
 * Custom prop type that logs a warning that a prop is being deprecated
 * @param {propType} propType
 * @param {string} message
 */
function deprecate(propType, message) {
  function validate(props, propName, componentName, ...rest) {

    if (props[propName] != null && process.env.NODE_ENV !== 'production') {
      const warning = `Matchbox: Deprecated prop "${propName}" of "${componentName}"\n${message}`;
      if (!warned[warning]) {
        warned[warning] = true;
        console.warn(warning); // eslint-disable-line no-console
        return;
      }
    }

    return propType(props, propName, componentName, ...rest);
  }

  validate.isRequired = propType.isRequired; // Fixes react-docgen false positive
  return validate;
}

function resetWarned() {
  warned = {};
}

deprecate.resetWarned = resetWarned;

export {
  deprecate
};
