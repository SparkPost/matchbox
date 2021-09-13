import React from 'react';
import useWindowEvent from './useWindowEvent';
import { getRectFor } from '../helpers/geometry';
import { getWindow } from '../helpers/window';

/**
 * Reusable hook that returns true when element is scrolled into view
 *
 * @param {Boolean} once defaults to true. If set to false the inView param will change when the element is scrolled into and out of view
 *
 * @example
 * const [ref, inView] = useInView({ once: false });
 * return <div>{inView ? 'In View' : 'Not In View'}</div>
 *
 */
function useInView<T extends HTMLElement>({
  offset = 0,
  once = true,
}: { offset?: number; once?: boolean } = {}): [React.RefCallback<T>, boolean] {
  const [node, setNode] = React.useState(null);
  const [inView, setInView] = React.useState(false);
  const [scroll, setScroll] = React.useState(0);
  const [rect, setRect] = React.useState({ top: 0, height: 0 });

  const environment = getWindow();

  useWindowEvent('scroll', () => {
    setScroll(environment.scrollY);
  });

  React.useEffect(() => {
    setRect(getRectFor(node));
  }, [node]);

  React.useLayoutEffect(() => {
    const { top, height } = rect;
    const { innerHeight } = environment;

    if (top) {
      if (scroll >= top + offset - innerHeight) {
        setInView(true);
      }

      if (scroll > top + height || scroll < top - innerHeight) {
        if (!once) {
          setInView(false);
        }
      }
    }
  }, [scroll]);

  return [setNode, inView];
}

export default useInView;
