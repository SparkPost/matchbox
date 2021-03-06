import React from 'react';
import { getWindow } from '../helpers/window';

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

function usePrefersReducedMotion() {
  const environment = getWindow();

  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(
    environment.matchMedia(QUERY).matches,
  );

  React.useEffect(() => {
    const mql = environment.matchMedia(QUERY);

    const listener = event => {
      setPrefersReducedMotion(event.matches);
    };

    if (mql.addListener) {
      mql.addListener(listener);
    }

    return () => {
      if (mql.removeListener) {
        mql.removeListener(listener);
      }
    };
  });

  return prefersReducedMotion ? 'reduce' : 'no-preference';
}

export default usePrefersReducedMotion;
