/* eslint-disable max-lines */
import { tokens } from '@sparkpost/design-tokens';

// Style prop reference:
// https://styled-system.com/table

const theme = {
  // Example: <Box bg="blue.100" color={gray.1000} />
  colors: {
    gray: {
      100: tokens.color_gray_100,
      200: tokens.color_gray_200,
      300: tokens.color_gray_300,
      400: tokens.color_gray_400,
      500: tokens.color_gray_500,
      600: tokens.color_gray_600,
      700: tokens.color_gray_700,
      800: tokens.color_gray_800,
      900: tokens.color_gray_900,
      1000: tokens.color_gray_1000,
    },
    blue: {
      100: tokens.color_blue_100,
      200: tokens.color_blue_200,
      300: tokens.color_blue_300,
      400: tokens.color_blue_400,
      500: tokens.color_blue_500,
      600: tokens.color_blue_600,
      700: tokens.color_blue_700,
      800: tokens.color_blue_800,
      900: tokens.color_blue_900,
      1000: tokens.color_blue_1000,
    },
    red: {
      100: tokens.color_red_100,
      200: tokens.color_red_200,
      300: tokens.color_red_300,
      400: tokens.color_red_400,
      500: tokens.color_red_500,
      600: tokens.color_red_600,
      700: tokens.color_red_700,
      800: tokens.color_red_800,
      900: tokens.color_red_900,
      1000: tokens.color_red_1000,
    },
    yellow: {
      100: tokens.color_yellow_100,
      200: tokens.color_yellow_200,
      300: tokens.color_yellow_300,
      400: tokens.color_yellow_400,
      500: tokens.color_yellow_500,
      600: tokens.color_yellow_600,
      700: tokens.color_yellow_700,
      800: tokens.color_yellow_800,
      900: tokens.color_yellow_900,
      1000: tokens.color_yellow_1000,
    },
    green: {
      100: tokens.color_green_100,
      200: tokens.color_green_200,
      300: tokens.color_green_300,
      400: tokens.color_green_400,
      500: tokens.color_green_500,
      600: tokens.color_green_600,
      700: tokens.color_green_700,
      800: tokens.color_green_800,
      900: tokens.color_green_900,
      1000: tokens.color_green_1000,
    },
    teal: {
      100: tokens.color_teal_100,
      200: tokens.color_teal_200,
      300: tokens.color_teal_300,
      400: tokens.color_teal_400,
      500: tokens.color_teal_500,
      600: tokens.color_teal_600,
      700: tokens.color_teal_700,
      800: tokens.color_teal_800,
      900: tokens.color_teal_900,
      1000: tokens.color_teal_1000,
    },
    purple: {
      100: tokens.color_purple_100,
      200: tokens.color_purple_200,
      300: tokens.color_purple_300,
      400: tokens.color_purple_400,
      500: tokens.color_purple_500,
      600: tokens.color_purple_600,
      700: tokens.color_purple_700,
      800: tokens.color_purple_800,
      900: tokens.color_purple_900,
      1000: tokens.color_purple_1000,
    },
    magenta: {
      100: tokens.color_magenta_100,
      200: tokens.color_magenta_200,
      300: tokens.color_magenta_300,
      400: tokens.color_magenta_400,
      500: tokens.color_magenta_500,
      600: tokens.color_magenta_600,
      700: tokens.color_magenta_700,
      800: tokens.color_magenta_800,
      900: tokens.color_magenta_900,
      1000: tokens.color_magenta_1000,
    },
    brand: {
      orange: tokens.color_brand_orange,
      gray: tokens.color_brand_gray,
      blue: tokens.color_brand_blue,
    },
    white: tokens.color_white,
  },

  // Example: <Box marginBottom="400" padding={400} />
  space: {
    0: tokens.spacing_0,
    100: tokens.spacing_100,
    200: tokens.spacing_200,
    300: tokens.spacing_300,
    400: tokens.spacing_400,
    450: tokens.spacing_450,
    500: tokens.spacing_500,
    550: tokens.spacing_550,
    600: tokens.spacing_600,
    650: tokens.spacing_650,
    700: tokens.spacing_700,
    750: tokens.spacing_750,
    800: tokens.spacing_800,
  },

  // Example: <Box width="1200" height={1/2} />
  sizes: {
    0: tokens.sizing_0,
    100: tokens.sizing_100,
    200: tokens.sizing_200,
    300: tokens.sizing_300,
    400: tokens.sizing_400,
    450: tokens.sizing_450,
    500: tokens.sizing_500,
    550: tokens.sizing_550,
    600: tokens.sizing_600,
    650: tokens.sizing_650,
    700: tokens.sizing_700,
    750: tokens.sizing_750,
    800: tokens.sizing_800,
    900: tokens.sizing_900,
    1000: tokens.sizing_1000,
    1100: tokens.sizing_1100,
    1200: tokens.sizing_1200,
    1300: tokens.sizing_1300,
    1350: tokens.sizing_1350,
    1400: tokens.sizing_1400,
    full: '100%',
  },

  // Example: <Box borderRadius="pill" />
  radii: {
    0: tokens.borderRadius_0,
    100: tokens.borderRadius_100,
    200: tokens.borderRadius_200,
    pill: tokens.borderRadius_pill,
    circle: tokens.borderRadius_circle,
  },

  // Example: <Box border={500} />
  borders: {
    400: `${tokens.borderWidth_100} solid ${tokens.color_gray_400}`,
  },

  // Example: <Box borderWidth={100} />
  borderWidths: {
    0: tokens.borderWidth_0,
    100: tokens.borderWidth_100,
  },

  // Example: <Box boxShadow={200} />
  shadows: {
    0: tokens.boxShadow_0,
    100: tokens.boxShadow_100,
    200: tokens.boxShadow_200,
    300: tokens.boxShadow_300,
    400: tokens.boxShadow_400,
  },

  // Example:
  // <Box
  //   fontFamily="monospace"
  //   fontSize="100"
  //   lineHeight="100"
  //   fontWeight="medium"
  // />
  fonts: {
    sans: tokens.fontFamily_sans,
    monospace: tokens.fontFamily_monospace,
  },

  fontSizes: {
    100: tokens.fontSize_100,
    200: tokens.fontSize_200,
    300: tokens.fontSize_300,
    400: tokens.fontSize_400,
    500: tokens.fontSize_500,
    600: tokens.fontSize_600,
    700: tokens.fontSize_700,
    800: tokens.fontSize_800,
  },

  lineHeights: {
    100: tokens.lineHeight_100,
    200: tokens.lineHeight_200,
    300: tokens.lineHeight_300,
    400: tokens.lineHeight_400,
    500: tokens.lineHeight_500,
    600: tokens.lineHeight_600,
    700: tokens.lineHeight_700,
    800: tokens.lineHeight_800,
  },

  fontWeights: {
    light: tokens.fontWeight_light,
    normal: tokens.fontWeight_normal,
    medium: tokens.fontWeight_medium,
    semibold: tokens.fontWeight_semibold,
  },

  breakpoints: [
    tokens.mediaQuery_xs,
    tokens.mediaQuery_sm,
    tokens.mediaQuery_md,
    tokens.mediaQuery_lg,
    tokens.mediaQuery_xl,
  ],

  zIndices: {
    below: tokens.zIndex_below,
    default: tokens.zIndex_default,
    overlay: tokens.zIndex_overlay,
  },
};

export default theme;
