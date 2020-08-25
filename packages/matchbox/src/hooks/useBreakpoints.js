import React from 'react';
import { tokens } from '@sparkpost/design-tokens';
import { useWindowSize } from '../helpers/geometry';

/**
 * Hook that returns token breakpoint status based on window width
 *
 * @example
 * const breakpoints = useBreakpoints();
 *
 * breakpoints = {
 *    xs: true,
 *    sm: true,
 *    md: true,
 *    lg: false,
 *    xl: false,
 * }
 */
function useBreakpoints() {
  const { width: windowWidth } = useWindowSize();

  const mediaQueries = React.useMemo(() => {
    const mediaQueriesKeys = Object.keys(tokens).filter(key => key.includes('mediaQuery_'));

    return mediaQueriesKeys.reduce((acc, item) => {
      const breakpoint = Number(tokens[item].replace('px', ''));
      return {
        ...acc,
        [item.replace('mediaQuery_', '')]: windowWidth > breakpoint,
      };
    }, {});
  }, [tokens, windowWidth]);
  return mediaQueries;
}

export default useBreakpoints;
