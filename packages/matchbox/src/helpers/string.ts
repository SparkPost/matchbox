export function secondsToMS(secondsStr: string): number {
  return Number(secondsStr.replace(/\D/g, '')) * 100;
}
