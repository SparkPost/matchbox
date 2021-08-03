/**
 * Finds and clones a React component from display name
 * @param {string} name
 * @param {element} children
 * @param {object} passedProps
 *
 * @example
 *  getChild('MyChildComponent', props.children, { extra: 'prop' })
 */
export function getChild(name: string, children: any, passedProps?: object): any;
export function excludeChild(names: any, children: any): any;
