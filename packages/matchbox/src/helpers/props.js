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
export function omit(props, names) {
  const next = {};
  const regex = new RegExp(`^(${names.join('|')})$`);

  for (let key in props) {
    if (regex.test(key)) continue;
    next[key] = props[key];
  }
  return next;
}

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
export function pick(props, names) {
  const next = {};
  const regex = new RegExp(`^(${names.join('|')})$`);

  for (let key in props) {
    if (!regex.test(key)) continue;
    next[key] = props[key];
  }
  return next;
}

/**
 * Returns a configuration object for styled-components with omitted props, to be used with .withConfig
 * @param {Array} arr
 * @param {Object} config
 *
 * @see https://styled-components.com/docs/api#shouldforwardprop
 */
export function clean(arr = [], config = {}) {
  return {
    shouldForwardProp: (prop, defaultFn) => !arr.includes(prop) && defaultFn(prop),
    ...config,
  };
}
