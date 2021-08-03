/**
 * Omits styled system props from an object
 * @param {Object} props
 * @param {Array} names
 *
 * @example
 *  import { margin } from 'styled-system';
 *
 * omit({ my: '100', className: 'classs' }, margin.propNames)
 *  > { className: 'class' }
 */
export function omit(props: any, names: any[]): {};
/**
 * Picks styled system props from an object
 * @param {Object} props
 * @param {Array} names
 *
 * @example
 *  import { margin } from 'styled-system';
 *
 * pick({ my: '100', py: '100' }, margin.propNames)
 *  > { my: '100' }
 */
export function pick(props: any, names: any[]): {};
/**
 * Returns a configuration object for styled-components with omitted props, to be used with .withConfig
 * @param {Array} arr
 * @param {Object} config
 *
 * @see https://styled-components.com/docs/api#shouldforwardprop
 */
export function clean(arr?: any[], config?: any): any;
