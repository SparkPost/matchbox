export function get(theme: { [k: string]: any }, str: string): string {
  return str.split('.').reduce((o, i) => o[i], theme);
}

export function getTheme(str: string) {
  return ({ theme }: { theme?: { [k: string]: any } }): string => {
    return get(theme, str);
  };
}
