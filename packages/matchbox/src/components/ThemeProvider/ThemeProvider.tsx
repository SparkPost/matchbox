import React from 'react';
import {
  ThemeProvider,
  createGlobalStyle,
  StyleSheetManager,
  StyleSheetManagerProps,
} from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from './theme';
import global from './globalStyles';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${global}
`;

type ManagerProps = {
  children?: React.ReactNode;
  target?: StyleSheetManagerProps['target'];
};

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
function Manager({ target, children }: ManagerProps): JSX.Element {
  if (!target) {
    return <>{children}</>;
  }

  return <StyleSheetManager target={target}>{children}</StyleSheetManager>;
}

Manager.displayName = 'MatchboxStyleSheetManager';

export type ThemeProviderProps = {
  skipGlobalStyles?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  theme?: { [key: string]: any };
  target?: StyleSheetManagerProps['target'];
  children?: React.ReactNode;
};

/**
 * Provides context for styled-system
 *
 * - https://www.styled-components.com/docs/advanced#theming
 * - https://styled-system.com/theme-specification
 *
 * @prop theme Overrides matchbox's theme
 */
function Theme(props: ThemeProviderProps): JSX.Element {
  return (
    <Manager target={props.target}>
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
export default Theme;
