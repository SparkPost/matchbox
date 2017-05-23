import { configure } from '@kadira/storybook';
import '@kadira/storybook/addons';
import 'react-storybook-addon-backgrounds/register';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
