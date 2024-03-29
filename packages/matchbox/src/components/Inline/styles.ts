import { system } from 'styled-system';

export const negativeTop = system({
  $gutter: {
    property: 'marginTop',
    scale: 'space',
    transform: (value, scale) => `calc(-${scale[value] || value} - 1px)`,
  },
});

export const negativeLeft = system({
  $gutter: {
    property: 'marginLeft',
    scale: 'space',
    transform: (value, scale) => `-${scale[value] || value}`,
  },
});

export const alignChildren = system({
  $align: {
    property: 'justifyContent',
    defaultScale: {
      center: 'center',
      left: 'flex-start',
      right: 'flex-end',
    },
  },
});

export const alignYChildren = system({
  $alignY: {
    property: 'alignItems',
    defaultScale: {
      center: 'center',
      top: 'flex-start',
      bottom: 'flex-end',
    },
  },
});
