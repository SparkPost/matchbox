import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import {
  ThemeProvider,
  ActionList,
  Button,
  Inline,
  Popover,
  Panel,
  Box,
} from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Action|ActionList',
};

export const WithinPopovers = withInfo({ propTables: [ActionList] })(() => (
  <Inline space="15rem">
    <Popover open trigger={<Button>Actions</Button>} style={{ width: '200px' }}>
      <ActionList actions={[{ content: 'Action1' }, { content: 'Action2' }]} />
    </Popover>

    <Popover open trigger={<Button>Sections</Button>} style={{ width: '200px' }}>
      <ActionList
        sections={[
          [
            { content: 'Sectioned1', to: 'http://sparkpost.com', external: true },
            { content: 'Testing really really really long text' },
          ],
          [{ content: 'Sectioned3' }, { content: 'Sectioned4' }],
        ]}
      />
    </Popover>

    <Popover open trigger={<Button>Actions with Sections</Button>} style={{ width: '200px' }}>
      <ActionList
        actions={[{ content: 'Action1' }, { content: 'Action2' }]}
        sections={[[{ content: 'Sectioned1' }, { content: 'Sectioned2' }]]}
      />
    </Popover>

    <Popover open trigger={<Button>Actions with Group By Key</Button>} style={{ width: '200px' }}>
      <ActionList
        groupByKey="group"
        actions={[
          { content: 'Action1', group: 1 },
          { content: 'Action2', group: 2 },
        ]}
      />
    </Popover>

    <Popover open trigger={<Button>Actions with Visible Key</Button>} style={{ width: '200px' }}>
      <ActionList
        groupByKey="group"
        actions={[
          { content: 'Action1', group: 1 },
          { content: 'Action2', group: 2, visible: true },
          { content: 'Action3', group: 2, visible: false },
        ]}
      />
    </Popover>

    <Popover open trigger={<Button>Actions with a max height</Button>} style={{ width: '200px' }}>
      <ActionList
        groupByKey="group"
        maxHeight={150}
        actions={[
          { content: 'Action1', group: 1 },
          { content: 'Action2', group: 2, visible: true },
          { content: 'Action2', group: 3, visible: true },
          { content: 'Action2', group: 4, visible: true },
          { content: 'Action2', group: 5, visible: true },
        ]}
      />
    </Popover>
  </Inline>
));

export const SelectedActions = withInfo({ propTables: [ActionList] })(() => (
  <Box maxWidth="20rem">
    <Panel>
      <ActionList
        actions={[
          { content: 'Action1', selected: true },
          { content: 'Action2', selected: true },
          { content: 'Action3', selected: false },
        ]}
      />
    </Panel>
  </Box>
));

export const HighlightedActions = withInfo({ propTables: [ActionList] })(() => (
  <Box maxWidth="20rem">
    <Panel>
      <ActionList
        actions={[
          { content: 'Action1', highlighted: true },
          { content: 'Action2', highlighted: true },
          { content: 'Action3', selected: false },
        ]}
      />
    </Panel>
  </Box>
));

export const AsButtonsAndCheckboxes = withInfo({ propTables: [ActionList] })(() => (
  <Box maxWidth="20rem">
    <Panel>
      <ActionList
        actions={[
          { content: 'Checkbox', selected: true, is: 'checkbox' },
          { content: 'Checkbox', is: 'checkbox' },
          { content: 'Button', selected: false, is: 'button' },
          { content: 'Link', is: 'link', to: 'https://sparkpost.com', external: true },
        ]}
      />
    </Panel>
  </Box>
));
