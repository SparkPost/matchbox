export default useResizeObserver;
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
declare function useResizeObserver(): any[];
