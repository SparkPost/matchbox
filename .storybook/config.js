import * as storybook from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

// Option defaults:
setOptions({
  name: 'Matchbox',
  url: 'https://github.com/SparkPost/matchbox/',
});

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true
});

storybook.configure(loadStories, module);
