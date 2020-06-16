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
  return React.Children.map(children, child => {
    if (
      React.isValidElement(child) &&
      (child.type.displayName === name || child.type.name === name)
    ) {
      return React.cloneElement(child, passedProps);
    }

    return null;
  });
}
