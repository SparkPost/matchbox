import React from 'react';
import { getWindow } from '../helpers/window';

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
  const environment = getWindow();

  const [prefersColorScheme, setPrefersColorScheme] = React.useState(
    environment.matchMedia(QUERY).matches,
  );

  React.useEffect(() => {
    const mql = environment.matchMedia(QUERY);

    const listener = (event) => {
      setPrefersColorScheme(event.matches);
    };

    if (mql) {
      mql.addEventListener ? mql.addEventListener('change', listener) : mql.addListener(listener);
    }

    return () => {
      if (mql) {
        mql.removeEventListener
          ? mql.removeEventListener('change', listener)
          : mql.removeListener(listener);
      }
    };
  });

  return prefersColorScheme ? 'dark' : 'light';
}

export default usePrefersColorScheme;
