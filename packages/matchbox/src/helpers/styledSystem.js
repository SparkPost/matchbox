/**
 * Allows aliasing of custom prop values to expected styled-system values.
 * Should be memoized.
 *
 * @example
 *  mapStyledSystemResponsiveProp({
      small: '100',
      medium: '400',
      large: '800'
    }, props.customProp);
 */
export function mapStyledSystemResponsiveProp(map, value) {
  if (!Array.isArray(value)) {
    return map[value];
  }

  return value.map((breakpointValue) => map[breakpointValue]);
}
