import React from 'react';
import { getWindow, isBrowser } from '../helpers/window';

/**
 * SSR friendly hook that returns prefers-color-scheme status
 *
 * @returns
 * 'dark' OR 'light'
 *
 * @example
 * const prefersColorScheme = usePrefersColorScheme();
 * return <div>{prefersColorScheme}</div>
 */

const QUERY = '(prefers-color-scheme: dark)';

function usePrefersColorScheme(): 'dark' | 'light' {
  if (!isBrowser()) {
    return 'light';
  }

  const environment = getWindow();
  const matches = environment.matchMedia(QUERY) ? environment.matchMedia(QUERY).matches : false;

  const [prefersColorScheme, setPrefersColorScheme] = React.useState(matches);

  React.useEffect(() => {
    const mql = environment.matchMedia(QUERY);

    const listener = (event) => {
      setPrefersColorScheme(event.matches);
    };

    if (mql && mql.addListener) {
      mql.addListener(listener);
    }

    return () => {
      if (mql && mql.removeListener) {
        mql.removeListener(listener);
      }
    };
  });

  return prefersColorScheme ? 'dark' : 'light';
}

export default usePrefersColorScheme;
