import * as SystemProps from 'styled-system';

function getSystemProps(propType) {
  const availableProps = SystemProps[propType]
    ? SystemProps[propType].propNames
    : [];

  return availableProps;
}

export default getSystemProps;
