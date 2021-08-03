export default useInView;
/**
 * Reusable hook that returns true when element is scrolled into view
 *
 * @param {Boolean} once // defaults to true. If set to false the inView param will change when the element is scrolled into and out of view
 *
 * @example
 * const [ref, inView] = useInView({ once: false });
 * return <div>{inView ? 'In View' : 'Not In View'}</div>
 *
 */
declare function useInView({ offset, once }?: boolean): any[];
