import React from 'react';
import { tokens } from '@sparkpost/design-tokens';
import { getWindow, isBrowser } from '../helpers/window';
import { Breakpoints } from '../helpers/types';

// Defining queries here to ensure order is correct
const queries = [
  `(min-width: ${tokens.mediaQuery_xl})`,
  `(min-width: ${tokens.mediaQuery_lg})`,
  `(min-width: ${tokens.mediaQuery_md})`,
  `(min-width: ${tokens.mediaQuery_sm})`,
  `(min-width: ${tokens.mediaQuery_xs})`,
];

// This order must be the same as above
const keys: Breakpoints[] = ['xl', 'lg', 'md', 'sm', 'xs'];

/**
 * Hook that returns token breakpoint status based on window width
 *
 * @example
 * const breakpoint = useBreakpoint();
 *
 * Possible `breakpoint` values:
 * ['xl', 'lg', 'md', 'sm', 'xs', 'default'];
 *
 * @see https://usehooks.com/useMedia/
 */
function useBreakpoint(): Breakpoints {
  if (!isBrowser()) {
    return 'default';
  }

  const environment = getWindow();
  const list = queries.map((q) => environment.matchMedia(q));

  function getValue(): Breakpoints {
    // Get index of first media query that matches
    const index = list.findIndex((mql: MediaQueryList) => mql.matches);
    // Return related value or 'default' if none (smaller than xs size)
    return typeof keys[index] !== 'undefined' ? keys[index] : 'default';
  }

  // State and setter for matched value
  const [value, setValue] = React.useState<Breakpoints>(getValue);

  React.useEffect(
    () => {
      // Event listener callback
      // Note: By defining getValue outside of useEffect we ensure that it has
      // current values of hook args (as this hook callback is created once on mount).
      const handler = () => setValue(getValue);
      // Set a listener for each media query with above handler as callback.
      list.forEach((mql: MediaQueryList) =>
        mql.addEventListener ? mql.addEventListener('change', handler) : mql.addListener(handler),
      );
      // Remove listeners on cleanup
      return () =>
        list.forEach((mql: MediaQueryList) =>
          mql.addEventListener
            ? mql.removeEventListener('change', handler)
            : mql.removeListener(handler),
        );
    },
    [], // Empty array ensures effect is only run on mount and unmount
  );

  return value;
}

export default useBreakpoint;
