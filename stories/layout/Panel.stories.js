import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryContainer from '../storyHelpers/StoryContainer';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';

import { Panel } from '@sparkpost/matchbox';

addDecorator(storyFn => (
  <ThemeProvider>
    <StoryContainer>{storyFn()}</StoryContainer>
  </ThemeProvider>
));

export default {
  title: 'Layout|Panel',
};

export const WithATitle = withInfo()(() => (
  <Panel p={400} title="Title" sectioned>
    This is a panel with a title
  </Panel>
));

export const WithAnAccent = withInfo()(() => (
  <>
    <Panel p={400} mb={300} accent sectioned>
      This is a highlighted panel with a title
    </Panel>
    <Panel p={400} mb={300} accent="orange" sectioned>
      This is a highlighted panel with a title
    </Panel>
  </>
));

export const WithAFooter = withInfo()(() => (
  <>
    <Panel p={400} title="Title" accent sectioned>
      This is a panel
    </Panel>
    <Panel.Footer mb={400} left="Left aligned" right="Right aligned"></Panel.Footer>

    <Panel p={400} title="Title" accent sectioned>
      This is a panel
    </Panel>
    <Panel.Footer mb={400} left="Left aligned" right="Right aligned"></Panel.Footer>
  </>
));

export const WithMultipleSections = withInfo()(() => (
  <Panel>
    <Panel.Section p={400}>This is a panel with sections</Panel.Section>
    <Panel.Section p={400}>This is a panel with sections</Panel.Section>
    <Panel.Section p={400}>This is a panel with sections</Panel.Section>
  </Panel>
));

export const WithActions = withInfo()(() => {
  const actions = [
    {
      content: 'Edit',
      onClick: action('Edit Clicked'),
      color: 'red',
    },
    {
      content: 'Delete',
      onClick: action('Delete Clicked'),
      color: 'red',
    },
    {
      content: 'Not Visible',
      visible: false,
    },
  ];
  const sectionActions = [
    {
      content: 'View Details',
      onClick: action('Details Clicked'),
      color: 'red',
    },
    {
      content: 'Not Visible',
      visible: false,
    },
  ];
  return (
    <Panel p={400} actions={actions} accent="red" title="Panel with Actions">
      <Panel.Section p={400} actions={sectionActions}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet perspiciatis harum
          reprehenderit, odio temporibus culpa beatae iure!
        </p>
      </Panel.Section>
    </Panel>
  );
});
