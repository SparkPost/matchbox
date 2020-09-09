import React from 'react';

/**
 * Finds and clones a React component from display name
 * @param {string} name
 * @param {element} children
 * @param {object} passedProps
 *
 * @example
 *  getChild('MyChildComponent', props.children, { extra: 'prop' })
 */
export function getChild(name, children, passedProps = {}) {
  return React.Children.map(children, (child, index) => {
    if (
      React.isValidElement(child) &&
      (child.type.displayName === name || child.type.name === name)
    ) {
      passedProps.index = index;
      return React.cloneElement(child, passedProps);
    }

    return null;
  });
}

export function excludeChild(names, children) {
  return React.Children.map(children, child => {
    if (
      React.isValidElement(child) &&
      (names.includes(child.type.displayName) || names.includes(child.type.name))
    ) {
      return null;
    }

    return child;
  });
}
