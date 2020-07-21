import React from 'react';
import ResizeObserver from 'resize-observer-polyfill';

/**
 * @see https://tobbelindstrom.com/blog/resize-observer-hook/
 * @see https://github.com/que-etc/resize-observer-polyfill
 *
 * @returns
 * target: DOM Element,
 * contentRect: {
 *   x: number
 *   y: number
 *   width: number
 *   height: number
 *   top: number
 *   right: number
 *   bottom: number
 *   left: number
 * }
 * @example
 * const Component = () => {
 *  const [ref, entry] = useResizeObserver();
 *  return <div ref={ref} />;
 * };
 */
function useResizeObserver() {
  const [entry, setEntry] = React.useState({});
  const [node, setNode] = React.useState(null);
  const observer = React.useRef(null);

  const disconnect = React.useCallback(() => {
    const { current } = observer;
    current && current.disconnect();
  }, []);

  const observe = React.useCallback(() => {
    observer.current = new ResizeObserver(([entry]) => setEntry(entry));
    node && observer.current.observe(node);
  }, [node]);

  React.useLayoutEffect(() => {
    observe();
    return () => disconnect();
  }, [disconnect, observe]);

  return [setNode, entry];
}

export default useResizeObserver;
