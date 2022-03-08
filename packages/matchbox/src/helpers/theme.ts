export function get(object: { [k: string]: any }, str: string): string {
  const parts = str.split('.');

  const result = parts.reduce((o, key) => {
    if (!o || !o[key]) {
      return undefined;
    }

    return o[key];
  }, object);

  return result;
}

export function getTheme(str: string) {
  return ({ theme }: { theme?: { [k: string]: any } }): string => {
    return get(theme, str);
  };
}
