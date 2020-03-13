/**
 * Omits styled system props from an object
 * @param {Object} props
 * @param {Array} names
 *
 * @example
 *  import { margin } from 'styled-system';
 *
 * omit({ my: '100', className: 'classs' }, [margin.propNames])
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
