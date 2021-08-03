export function getWindowRect(): {
    top: any;
    left: any;
    height: any;
    width: any;
};
export function getRectFor(node: any): any;
/**
 * Provides a hook that returns window dimensions
 * @param  {number} [wait=100] Timer for debounced dimension calculation
 * @return {Shape}             Same results as `getWindowRect``
 */
export function useWindowSize(wait?: number): any;
/**
 * Gets preferred direction for the provided react component
 * @param  {React Node} node - a react component
 * @return {Shape}
 * Returns directional booleans for where the component should render. Eg:
 * top: true if component is in the bottom half of the screen
 * right: true if component in the left half of the screen
 */
export function getPreferredDirectionFor(node: any): any;
/**
 * Gets coordinates and dimensions in pixels for the provided react component
 * @param  {React Node} node
 * @return {Shape}
 */
export function getPositionFor(node: any, { fixed }?: {
    fixed?: boolean;
}): any;
/**
 * Linearly interpolates and clamps between two values
 * @param  {number} min
 * @param  {number} max
 * @param  {number} n
 * @return {number}
 * @example
 *   lerp(10, 20, 0.5)
 *   > 15
 */
export function lerp(min: number, max: number, n: number): number;
/**
 * Rounds a number to the nearest baseline ceiling
 */
export function roundToBaseline(n: any, base?: number): number;
