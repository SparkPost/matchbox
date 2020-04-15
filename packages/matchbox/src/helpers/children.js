import React from 'react';

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
