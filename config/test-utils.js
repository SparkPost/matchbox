// // react-testing-library setup
import React from 'react';
import { render, configure, within, queries } from '@testing-library/react';
import ThemeProvider from '../packages/matchbox/src/components/ThemeProvider/ThemeProvider';

function Wrapper({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

/**
 * Custom query to match by element ID
 */
export function getById(container, id) {
  const result = within(container.querySelector(`#${id}`));
  if (result) {
    return result;
  }
  return null;
}

function customRender(ui, options) {
  return render(ui, { wrapper: Wrapper, ...options, queries: { ...queries, getById } });
}

// React testing library configuration
configure({
  testIdAttribute: 'data-id', // Overriding the default test ID used by `getByTestId` matcher
});

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
