import React from 'react';
import * as storybook from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { ThemeProvider, Box } from '@sparkpost/matchbox';

setOptions({
  theme: {
    brandTitle: 'Matchbox',
    brandUrl: 'https://github.com/SparkPost/matchbox/',
  },
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

// addon-info
setDefaults({
  inline: true,
  header: false,
});

storybook.addDecorator(storyFn => (
  <React.StrictMode>
    <ThemeProvider>
      <Box p="700">{storyFn()}</Box>
    </ThemeProvider>
  </React.StrictMode>
));
storybook.configure(require.context('../stories', true, /\.stories\.js$/), module);
