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

function usePrefersColorScheme() {
  const environment = getWindow();

  const [prefersColorScheme, setPrefersColorScheme] = React.useState(
    environment.matchMedia(QUERY).matches,
  );

  React.useEffect(() => {
    const mql = environment.matchMedia(QUERY);

    const listener = event => {
      setPrefersColorScheme(event.matches);
    };

    mql.addListener(listener);

    return () => {
      mql.removeListener(listener);
    };
  });

  return prefersColorScheme ? 'dark' : 'light';
}

export default usePrefersColorScheme;
