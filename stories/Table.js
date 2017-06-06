import React from 'react';
import { storiesOf, action, linkTo } from '@storybook/react';
import { StoryContainer } from './helpers';

import { Table, Panel } from '../src';

storiesOf('Table', module)
  .add('Default', () => (
    <StoryContainer>
      <Panel>
      <Table></Table>
      </Panel>
    </StoryContainer>
  ));
