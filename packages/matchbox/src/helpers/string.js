export function secondsToMS(secondsStr) {
  return Number(secondsStr.replace(/\D/g, '')) * 100;
}
