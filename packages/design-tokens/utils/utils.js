function toCamel(string) {
  return string
    .replace('-', ' ')
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase(),
    )
    .replace(/\s+/g, '');
}

function toSnake(string) {
  return string
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join('_');
}

function toFriendly(string) {
  return string
    .toLowerCase()
    .replace('-', ' ')
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

module.exports = {
  toCamel,
  toSnake,
  toFriendly,
};
