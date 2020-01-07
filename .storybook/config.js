import * as storybook from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import '../packages/matchbox/styles.css';

setOptions({
  theme: {
    brandTitle: 'Matchbox',
    brandUrl: 'https://github.com/SparkPost/matchbox/'
  },
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

// addon-info
setDefaults({
  inline: true,
  header: false
});

storybook.configure(require.context('../stories', true, /\.stories\.js$/), module);
