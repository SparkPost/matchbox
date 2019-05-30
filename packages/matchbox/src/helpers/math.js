export function roundToPlaces(number, places) {
  const multiplier = Math.pow(10, places);
  return Math.round(number * multiplier) / multiplier;
}

export function clamp(n, lower, upper) {
  if (n < lower) {
    return lower;
  }

  if (n > upper) {
    return upper;
  }

  return n;
}
