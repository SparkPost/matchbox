import React from 'react';
import useWindowEvent from './useWindowEvent';
import { getRectFor } from '../helpers/geometry';
import { getWindow } from '../helpers/window';

function useInView(callback, offset = 0) {
  const [node, setNode] = React.useState(null);
  const [inView, setInView] = React.useState(false);
  const [scroll, setScroll] = React.useState(0);
  const [rect, setRect] = React.useState({});
  const [cbCalled, setCbCalled] = React.useState(false);

  const environment = getWindow();

  useWindowEvent('scroll', () => {
    setScroll(environment.scrollY);
  });

  React.useLayoutEffect(() => {
    setRect(getRectFor(node));
  }, [node]);

  React.useLayoutEffect(() => {
    const { top, height } = rect;
    const { innerHeight } = environment;

    if (top) {
      if (scroll >= top + offset - innerHeight) {
        setInView(true);

        if (!cbCalled) {
          callback && callback();
          setCbCalled(true);
        }
      }

      if (scroll > top + height || scroll < top - innerHeight) {
        setInView(false);
      }
    }
  }, [scroll]);

  return [setNode, inView];
}

export default useInView;
