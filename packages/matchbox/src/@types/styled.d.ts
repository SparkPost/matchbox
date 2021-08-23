import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
      };
      blue: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
      };
      red: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
      };
      yellow: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
      };
      green: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
      };
      teal: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
      };
      purple: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
      };
      magenta: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        1000: string;
      };
      brand: {
        orange: string;
        gray: string;
        blue: string;
      };
      white: string;
    };

    space: {
      0: string;
      100: string;
      200: string;
      300: string;
      400: string;
      450: string;
      500: string;
      550: string;
      600: string;
      650: string;
      700: string;
      750: string;
      800: string;
    };

    sizes: {
      0: string;
      100: string;
      200: string;
      300: string;
      400: string;
      450: string;
      500: string;
      550: string;
      600: string;
      650: string;
      700: string;
      750: string;
      800: string;
      900: string;
      1000: string;
      1100: string;
      1150: string;
      1200: string;
      1300: string;
      1350: string;
      1400: string;
      full: '100%';
    };

    radii: {
      0: string;
      100: string;
      200: string;
      pill: string;
      circle: string;
    };

    borders: {
      300: string;
      400: string;
      500: string;
    };

    borderWidths: {
      0: string;
      100: string;
      200: string;
    };

    shadows: {
      0: string;
      100: string;
      200: string;
      300: string;
      400: string;
    };

    fonts: {
      sans: string;
      monospace: string;
    };

    fontSizes: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
    };

    lineHeights: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
    };

    fontWeights: {
      light: string;
      normal: string;
      medium: string;
      semibold: string;
    };

    breakpoints: string[];

    zIndices: {
      below: string;
      default: string;
      overlay: string;
    };

    motion: {
      duration: {
        fast: string;
        medium: string;
        slow: string;
      };
      ease: {
        in: string;
        out: string;
        inOut: string;
      };
    };
  }
}
