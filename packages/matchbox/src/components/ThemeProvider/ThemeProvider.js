import React from 'react';
import PropTypes from 'prop-types';
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
      {/* 
        FE-913:`skipGlobalStyles` is to exclude global styles from unit tests.
        The custom assertion `toHaveAttributeValue` fails with this turned on.
        We should either move away from using this assertion (or even enzyme),
        or try to resolve the error
      */}
      {!props.skipGlobalStyles && <GlobalStyle />}
      {props.children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  skipGlobalStyles: PropTypes.bool,
};

export default Theme;
