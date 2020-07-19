import React from 'react';
import ThemeProvider from '../packages/matchbox/src/components/ThemeProvider/ThemeProvider';
import { render, mount } from 'enzyme';

jest.mock('../packages/matchbox/src/components/ThemeProvider/theme', () => ({
  'mock-theme-key': 'mock-theme-value',
  borders: {},
  borderWidths: {},
  breakpoints: ['400px', '800px'],
  colors: {
    gray: {
      700: 'gray',
    },
    blue: {},
  },
  fonts: {},
  fontSizes: {
    400: '1rem',
  },
  fontWeights: {},
  lineHeights: {
    400: '1.5rem',
  },
  radii: {},
  sizes: {},
  space: {
    300: '0.5rem',
    400: '1rem',
    500: '1.5rem',
    600: '2rem',
  },
  shadows: {},
  zIndices: {},
}));

// jest-styled-components@6.3.3 has some issues:
// - does not work with Enzyme shallow or mount
// - does not work when globally installed in jest setup
// - https://github.com/styled-components/jest-styled-components/issues/266

global.renderStyled = node => {
  return render(<ThemeProvider skipGlobalStyles>{node}</ThemeProvider>);
};

global.mountStyled = node => {
  return mount(<ThemeProvider skipGlobalStyles>{node}</ThemeProvider>);
};
