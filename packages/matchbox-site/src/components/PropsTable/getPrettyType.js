function ObjectOf(type) {
  return `{ [key]: ${getPrettyType(type.value)} }`;
}

function OneOfType(type) {
  return type.value.map((v) => getPrettyType(v)).join(' | ');
}

function OneOf(type) {
  return type.value.map((v) => v.value).join(', ');
}

function ArrayOf(type) {
  return `[${getPrettyType(type.value)}]`;
}

function Shape(type) {
  const keys = Object.keys(type.value);
  return `{${keys.map((k) => `${k}: ${getPrettyType(type.value[k])}`)}, ...}`;
}

const typeMap = {
  'shape': Shape,
  'union': OneOfType,
  'arrayOf': ArrayOf,
  'objectOf': ObjectOf,
  // 'literal': Literal,
  'enum': OneOf
  // 'instanceOf': InstanceOf],
  // 'signature': Signature],
};

function getPrettyType(type) {
  if (!type) {
    return 'unknown';
  }

  const { name } = type;

  if (Object.keys(typeMap).includes(name)) {
    return typeMap[name](type);
  }

  if (name === 'node') {
    return 'ReactNode';
  }

  if (name === 'func') {
    return 'function';
  }

  if (name === 'bool') {
    return 'boolean';
  }

  return name;
}

export default getPrettyType;
