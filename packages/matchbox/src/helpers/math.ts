/**
 * Rounds `number` to the nearest `places` number of places
 * @param number
 * @param places
 * @returns Rounded number
 */
export function roundToPlaces(number: number, places: number): number {
  const multiplier = Math.pow(10, places);
  return Math.round(number * multiplier) / multiplier;
}

/**
 * Clamps `number` between the `lower` and `upper` limits
 * @param number Number to clamp
 * @param lower Lower bounds
 * @param upper Uppwer bounds
 * @returns Clamped number
 */
export function clamp(number: number, lower: number, upper: number): number {
  if (number < lower) {
    return lower;
  }

  if (number > upper) {
    return upper;
  }

  return number;
}
