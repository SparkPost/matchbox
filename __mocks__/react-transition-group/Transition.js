import React from 'react';

/**
 * Renders children in their settled state, so tests see open content as visible and closed content
 * as unmounted.
 * @param {{ in?: boolean, children: (state: string) => React.ReactNode }} props
 * @returns {React.ReactElement}
 * @public
 */
export default function Transition(props) {
  return <div>{props.in ? props.children('entered') : null}</div>;
}
