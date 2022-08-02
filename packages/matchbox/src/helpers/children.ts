import React from 'react';

/**
 * Finds and clones a React component from display name
 * @param {string} name
 * @param {element} children
 * @param {object} props
 *
 * @example
 *  getChild('MyChildComponent', props.children, { extra: 'prop' })
 */
export function getChild(
  name: string,
  children: React.ReactNode,
  props: Record<string, any> = {},
): React.ReactElement[] {
  return React.Children.map(children, (child, index) => {
    if (
      React.isValidElement(child) &&
      typeof child.type !== 'string' &&
      ((child.type as React.FunctionComponent).displayName === name || child.type.name === name)
    ) {
      props.index = index;
      return React.cloneElement(child, props);
    }

    return null;
  });
}

export function excludeChild(names: string[] | string, children: React.ReactNode): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (
      React.isValidElement(child) &&
      names.includes((child.type as React.FunctionComponent).displayName)
    ) {
      return null;
    }

    return child;
  });
}
