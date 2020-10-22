import React from 'react';
import useWindowEvent from './useWindowEvent';
import { getRectFor } from '../helpers/geometry';
import { getWindow } from '../helpers/window';

function useInView({ offset = 0, once = true } = {}) {
  const [node, setNode] = React.useState(null);
  const [inView, setInView] = React.useState(false);
  const [scroll, setScroll] = React.useState(0);
  const [rect, setRect] = React.useState({});

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
