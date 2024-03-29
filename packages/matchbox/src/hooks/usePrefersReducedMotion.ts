import React from 'react';
import { getWindow, isBrowser } from '../helpers/window';

/**
 * SSR friendly hook that returns prefers-reduced-state status to disable animations
 *
 * @returns
 * 'no-preference' OR 'reduce'
 *
 * @example
 * const prefersReducedMotion = usePrefersReducedMotion();
 * return <div>{prefersReducedMotion}</div>
 */

const QUERY = '(prefers-reduced-motion: reduce)';

function usePrefersReducedMotion(): 'reduce' | 'no-preference' {
  if (!isBrowser()) {
    return 'no-preference';
  }

  const environment = getWindow();
  const matches = environment.matchMedia(QUERY) ? environment.matchMedia(QUERY).matches : false;

  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState<boolean>(matches);

  React.useEffect(() => {
    const mql = environment.matchMedia(QUERY);

    const listener = (event) => {
      setPrefersReducedMotion(event.matches);
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

  return prefersReducedMotion ? 'reduce' : 'no-preference';
}

export default usePrefersReducedMotion;
