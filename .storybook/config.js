import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

function loadStories() {
  require('../stories');
  require('../stories/Button');
}

setOptions({
  // name: 'My Storybook',
  // url: 'https://example.com',
  // goFullScreen: false,
  // showLeftPanel: false,
  // showDownPanel: false,
  // showSearchBox: false,
  downPanelInRight: true,
  //sortStoriesByKind: false,
});

configure(loadStories, module);
