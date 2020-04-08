let warned = {};

function log(message, logLevel = 'warn') {
  console[logLevel](message); // eslint-disable-line no-console
}

/**
 * Custom prop type that logs a warning that a prop is being deprecated
 * @param {propType} propType
 * @param {string} message
 */
function deprecate(propType, message, logLevel = 'warn') {
  function validate(props, propName, componentName, ...rest) {
    if (props[propName] != null && process.env.NODE_ENV !== 'production') {
      const warning = `Matchbox: Deprecated prop "${propName}" of "${componentName}"\n${message}`;
      if (!warned[warning]) {
        warned[warning] = true;
        log(warning, logLevel);
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

/**
 * Reduce props to only defined prop types
 * @param {object} props
 * @param {object} propTypes
 */
function pick(props, propTypes) {
  return Object.keys(props).reduce((acc, key) => {
    if (!propTypes[key]) {
      return acc;
    }

    return { ...acc, [key]: props[key] };
  }, {});
}

export { deprecate, pick };
