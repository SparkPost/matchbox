import React from 'react';
import ThemeProvider from '../packages/matchbox/src/components/ThemeProvider/ThemeProvider';
import { render } from 'enzyme';
import theme from '../packages/matchbox/src/components/ThemeProvider/theme';

jest.mock('../packages/matchbox/src/components/ThemeProvider/theme', () => ({
  default: {
    "mock-theme-key": "mock-theme-value"
  }
}));

// jest-styled-components@6.3.3 has some issues:
// - does not work with Enzyme shallow or mount
// - does not work when globally installed in jest setup
// - https://github.com/styled-components/jest-styled-components/issues/266

global.renderStyled = (node) => {
  return render(<ThemeProvider>{node}</ThemeProvider>);
};
