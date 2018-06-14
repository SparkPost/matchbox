/**
 * Group a list of items into sub groups based on the value of each item's groupingKey
 *
 * @param {Array} list List of items to group
 * @param {String} groupingKey Key to use for grouping each item by this value
 *
 * @example
 * const list = [{ name: 'a', section: 1 }, { name: 'b', section: 2 }, { name: 'c', section: 1 }]
 *
 * groupBy(list, 'section')
 *
 * // returns
 * {
 *   1: [ { name: 'a', section: 1 }, { name: 'c', section: 1 } ],
 *   2: [ { name: 'b', section: 2 } ]
 * }
 */
export const groupBy = (list, groupingKey) => list.reduce((acc, item) => {
  const index = item[groupingKey];
  return { ...acc, [index]: [ ...(acc[index] || []), item ]};
}, {});

export const groupByValues = (list, groupingKey) => Object.values(groupBy(list, groupingKey));

/**
 * Filters by an array of actions by the visible key
 * @param {Array} actions - Array of actions
 *
 * @example
 * filterVisible([{ name: 'a', visible: true }, { name: 'b', visible: false }, { name: 'c' }])
 *
 * // returns
 * [{ name: 'a' }, { name: 'c' }]
 */
export const filterByVisible = (actions) => actions.reduce((acc, { visible = true, ...action }) => {
  if (visible) {
    acc.push(action);
  }
  return acc;
}, []);
