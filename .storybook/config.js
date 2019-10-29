import * as storybook from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Matchbox',
  url: 'https://github.com/SparkPost/matchbox/',
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true,
  maxPropsIntoLine: 1
});

storybook.configure(require.context('../stories-4.0', true, /\.stories\.js$/), module);
