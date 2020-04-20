import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle, StyleSheetManager } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from './theme';
import global from './globalStyles';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${global}
`;

/**
 * See https://styled-components.com/docs/api#stylesheetmanager
 * Target provides an alternate DOM node to inject styles info
 *
 * Example:
 * In your app's <head>:
 * <style id="styled-components-target"></style>
 *
 * When rendering ThemeProvider:
 * <ThemeProvider target={document.getElementById('styled-components-target')} />
 * */
function Manager({ target, children }) {
  if (!target) {
    return children;
  }

  return <StyleSheetManager target={target}>{children}</StyleSheetManager>;
}

Manager.displayName = 'MatchboxStyleSheetManager';

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
    <Manager>
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
    </Manager>
  );
}

Theme.displayName = 'MatchboxThemeProvider';
Theme.propTypes = {
  skipGlobalStyles: PropTypes.bool,
};

export default Theme;
