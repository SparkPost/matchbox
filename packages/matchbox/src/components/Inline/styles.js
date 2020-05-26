import { system } from 'styled-system';

export const negativeTop = system({
  gutter: {
    property: 'marginTop',
    scale: 'space',
    transform: (value, scale) => `-${scale[value] || value}`
  }
});

export const negativeLeft = system({
  gutter: {
    property: 'marginLeft',
    scale: 'space',
    transform: (value, scale) => `-${scale[value] || value}`
  }
});

export const alignChildren = system({
  align: {
    property: 'justifyContent',
    defaultScale: {
      center: 'center',
      left: 'flex-start',
      right: 'flex-end'
    }
  }
});
