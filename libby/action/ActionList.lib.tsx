import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
// @ts-ignore :(
import { Popover, Panel } from '@sparkpost/matchbox';
import { Button, Inline, ActionList, Box } from '@sparkpost/matchbox';

describe('ActionList', () => {
  add('within Popovers', () => {
    return (
      <Inline space="15rem">
        <Popover open trigger={<Button>Actions</Button>} style={{ width: '200px' }}>
          <ActionList>
            <ActionList.Action to="#" helpText="help text">
              Action1
            </ActionList.Action>
            <ActionList.Action to="#">Action2</ActionList.Action>
          </ActionList>
        </Popover>
        <Popover open trigger={<Button>Sections</Button>} style={{ width: '200px' }}>
          <ActionList>
            <ActionList.Section>
              <ActionList.Action to="#">Sectioned1</ActionList.Action>
              <ActionList.Action to="#">Testing really really really long text</ActionList.Action>
            </ActionList.Section>
            <ActionList.Section>
              <ActionList.Action to="#">Sectioned3</ActionList.Action>
              <ActionList.Action to="#" disabled>
                Sectioned4
              </ActionList.Action>
            </ActionList.Section>
          </ActionList>
        </Popover>
      </Inline>
    );
  });

  add('help text', () => (
    <Box maxWidth="20rem">
      <Panel>
        <ActionList>
          <ActionList.Action to="#" helpText="Sending Domain">
            Action1
          </ActionList.Action>
          <ActionList.Action to="#" helpText="Subaccount">
            Action2
          </ActionList.Action>
          <ActionList.Action to="#" helpText="Template">
            Action3
          </ActionList.Action>
        </ActionList>
      </Panel>
    </Box>
  ));

  add('with refs', () => {
    const ref = React.useRef();
    return (
      <Box maxWidth="20rem">
        <Panel>
          <ActionList>
            <ActionList.Action to="#" ref={ref}>
              Action1
            </ActionList.Action>
            <ActionList.Action to="#">Action2</ActionList.Action>
            <ActionList.Action to="#">Action3</ActionList.Action>
          </ActionList>
        </Panel>
      </Box>
    );
  });

  add('selected actions', () => (
    <Box maxWidth="20rem">
      <Panel>
        <ActionList>
          <ActionList.Action to="#" selected={true}>
            Action1
          </ActionList.Action>
          <ActionList.Action to="#" selected={true}>
            Action2
          </ActionList.Action>
          <ActionList.Action to="#" selected={false}>
            Action3
          </ActionList.Action>
        </ActionList>
      </Panel>
    </Box>
  ));

  add('highlighted actions', () => (
    <Box maxWidth="20rem">
      <Panel>
        <ActionList>
          <ActionList.Action to="#" highlighted={true}>
            Action1
          </ActionList.Action>
          <ActionList.Action to="#" highlighted={true}>
            Action2
          </ActionList.Action>
          <ActionList.Action to="#" highlighted={false}>
            Action3
          </ActionList.Action>
        </ActionList>
      </Panel>
    </Box>
  ));

  add('Actions as links, buttons, or checkboxes', () => (
    <Box maxWidth="20rem">
      <Panel>
        <ActionList data-id="test-data-id" className="test-class">
          <ActionList.Action is="button">Button</ActionList.Action>
          <ActionList.Action to="#" is="link" external>
            External Link
          </ActionList.Action>
          <ActionList.Action is="button" disabled>
            Disabled Button
          </ActionList.Action>
          <ActionList.Action to="#" is="link" external disabled>
            Disabled External Link
          </ActionList.Action>
        </ActionList>
      </Panel>
    </Box>
  ));

  add('works with system props', () => (
    <Box maxWidth="20rem">
      <Panel>
        <ActionList m="400" width={1 / 2}>
          <ActionList.Action is="link" to="#">
            Action1
          </ActionList.Action>
          <ActionList.Action is="link" to="#">
            Action2
          </ActionList.Action>
        </ActionList>
      </Panel>
    </Box>
  ));

  describe('Deprecated', () => {
    add('without Action component', () => (
      <Inline space="15rem">
        <Popover open trigger={<Button>Actions</Button>} style={{ width: '200px' }}>
          <ActionList
            actions={[
              { content: 'Action1', to: '#' },
              { content: 'Action2', to: '#' },
            ]}
          />
        </Popover>

        <Popover open trigger={<Button>Sections</Button>} style={{ width: '200px' }}>
          <ActionList
            sections={[
              [
                { content: 'Sectioned1', external: true, to: '#' },
                { content: 'Testing really really really long text', to: '#' },
              ],
              [
                { content: 'Sectioned3', to: '#' },
                { content: 'Sectioned4', to: '#' },
              ],
            ]}
          />
        </Popover>

        <Popover open trigger={<Button>Actions with Sections</Button>} style={{ width: '200px' }}>
          <ActionList
            actions={[
              { content: 'Action1', to: '#' },
              { content: 'Action2', to: '#' },
            ]}
            sections={[
              [
                { content: 'Sectioned1', to: '#' },
                { content: 'Sectioned2', to: '#' },
              ],
            ]}
          />
        </Popover>

        <Popover
          open
          trigger={<Button>Actions with Group By Key</Button>}
          style={{ width: '200px' }}
        >
          <ActionList
            groupByKey="group"
            actions={[
              { content: 'Action1', group: 1, to: '#' },
              { content: 'Action2', group: 2, to: '#' },
            ]}
          />
        </Popover>

        <Popover
          open
          trigger={<Button>Actions with Visible Key</Button>}
          style={{ width: '200px' }}
        >
          <ActionList
            groupByKey="group"
            actions={[
              { content: 'Action1', to: '#', group: 1 },
              { content: 'Action2', to: '#', group: 2, visible: true },
              { content: 'Action3', to: '#', group: 2, visible: false },
            ]}
          />
        </Popover>

        <Popover
          open
          trigger={<Button>Actions with a max height</Button>}
          style={{ width: '200px' }}
        >
          <ActionList
            groupByKey="group"
            maxHeight={150}
            actions={[
              { content: 'Action1', to: '#', group: 1 },
              { content: 'Action2', to: '#', group: 2, visible: true },
              { content: 'Action2', to: '#', group: 3, visible: true },
              { content: 'Action2', to: '#', group: 4, visible: true },
              { content: 'Action2', to: '#', group: 5, visible: true },
            ]}
          />
        </Popover>
      </Inline>
    ));
  });
});
