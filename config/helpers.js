
jest.mock('../packages/matchbox/src/components/ThemeProvider/theme', () => ({
  'mock-theme-key': 'mock-theme-value',
  borders: {},
  borderWidths: {},
  breakpoints: ['400px', '800px'],
  colors: {
    gray: {
      700: 'gray',
      900: 'gray',
    },
    red: {
      700: 'red',
      900: 'red',
    },
    blue: {
      700: 'blue',
    },
    white: 'white',
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

global.matchMedia = () => ({
  addListener: jest.fn(),
  removeListener: jest.fn(),
});
