import { system } from 'styled-system';

export const verticalAlignment = system({
  $alignY: {
    property: 'alignItems',
    defaultScale: {
      center: 'center',
      top: 'flex-start',
      bottom: 'flex-end',
    },
  },
});

export const horizontalAlignment = system({
  $align: {
    property: 'justifyContent',
    defaultScale: {
      center: 'center',
      left: 'flex-start',
      right: 'flex-end',
    },
  },
});

export const reverseColumns = system({
  $reverse: {
    property: 'flexDirection',
    defaultScale: {
      true: 'row-reverse',
      false: 'row',
    },
  },
});

export const negativeMargin = system({
  $gutter: {
    property: 'marginLeft',
    scale: 'space',
    transform: (value, scale) => `-${scale[value] || value}`,
  },
});
