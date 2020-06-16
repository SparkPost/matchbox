// Checks if window is available
// To support Gatsby's static build
export function getWindow() {
  if (typeof window !== 'undefined') {
    return window;
  }
  return {};
}
