// // react-testing-library setup
import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '../packages/matchbox/src/components/ThemeProvider/ThemeProvider';

function Wrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

function customRender(ui, options) {
  return render(ui, { wrapper: Wrapper, ...options });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
