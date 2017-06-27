import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon, { setDefaults } from '@storybook/addon-info';

function loadStories() {
  require('../stories');
}

setDefaults({
  inline: true,
  maxPropsIntoLine: 1,
  header: false,
  // maxPropObjectKeys: 10,
  // maxPropArrayLength: 20,
  // maxPropStringLength: 100,
});

setAddon(infoAddon);

setOptions({
  name: 'Matchbox',
  // url: 'https://example.com',
  // goFullScreen: false,
  // showLeftPanel: false,
  // showDownPanel: false,
  showSearchBox: false,
  // downPanelInRight: true,
  sortStoriesByKind: false,
});

configure(loadStories, module);
