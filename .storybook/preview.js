import React from 'react';
import { ThemeProvider } from '@sparkpost/matchbox';

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'black',
        value: '#000000',
      },
      {
        name: 'gray.1000',
        value: '#2c353d',
      },
      {
        name: 'gray.100',
        value: '#f5f8fa',
      },
    ],
  },
};
