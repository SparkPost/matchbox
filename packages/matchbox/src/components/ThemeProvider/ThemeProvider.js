import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from './theme';
import global from './globalStyles';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${global}
`;

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
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  );
}

export default Theme;
