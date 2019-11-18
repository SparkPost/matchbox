import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

/**
 * Provides context for styled-system
 *
 * - https://www.styled-components.com/docs/advanced#theming
 * - https://styled-system.com/theme-specification
 *
 * @prop theme Overrides matchbox's theme
 */

function Theme(props) {
  return (
    <ThemeProvider theme={{ ...theme, ...props.theme }}>
      {props.children}
    </ThemeProvider>
  );
}

export default Theme;
