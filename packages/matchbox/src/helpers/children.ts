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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: { [k: string]: any } = {},
): React.ReactElement[] {
  return React.Children.map(
    children,
    (child: { type?: { displayName?: string; name?: string } }, index) => {
      console.log(child);
      if (
        React.isValidElement(child) &&
        (child.type.displayName === name || child.type.name === name)
      ) {
        props.index = index;
        return React.cloneElement(child, props);
      }

      return null;
    },
  );
}

export function excludeChild(names: string[] | string, children: React.ReactNode): React.ReactNode {
  return React.Children.map(
    children,
    (child: { type?: { displayName?: string; name?: string } }) => {
      if (React.isValidElement(child) && names.includes(child.type.displayName)) {
        return null;
      }

      return child;
    },
  );
}
