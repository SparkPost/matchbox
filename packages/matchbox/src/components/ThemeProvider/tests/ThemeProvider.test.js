import React from 'react';
import { render } from '@testing-library/react';
import { ThemeContext } from 'styled-components';
import ThemeProvider from '../ThemeProvider';

/**
 * Prints the theme key it receives from the nearest styled-components ThemeProvider.
 * @returns {React.ReactElement}
 * @private
 */
function ThemeKey() {
  const theme = React.useContext(ThemeContext);
  return <div id="test">{theme.testKey}</div>;
}

describe('ThemeProvider', () => {
  it('should be able to modify the theme', () => {
    const { container } = render(
      <ThemeProvider theme={{ testKey: 'testValue' }}>
        <ThemeKey />
      </ThemeProvider>,
    );
    expect(container.querySelector('#test')).toHaveTextContent('testValue');
  });
});
