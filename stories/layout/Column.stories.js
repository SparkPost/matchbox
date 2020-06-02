import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Columns } from '@sparkpost/matchbox/components/Columns';
import { Column } from '@sparkpost/matchbox/components/Column';

import { DemoBlock } from './Columns.stories';

export default {
  title: 'Layout|Column',
};

export const Default = withInfo()(() => (
  <>
    <Columns space="300">
      <Column>
        <DemoBlock>Fluid</DemoBlock>
      </Column>
      <Column width="content">
        <DemoBlock>Content</DemoBlock>
      </Column>
    </Columns>
    <Columns space="300">
      <Column width={1 / 3}>
        <DemoBlock>1/3</DemoBlock>
      </Column>
      <Column>
        <DemoBlock>Fluid</DemoBlock>
      </Column>
    </Columns>
    <Columns space="300">
      <Column width={2 / 3}>
        <DemoBlock>2/3</DemoBlock>
      </Column>
      <Column>
        <DemoBlock>Fluid</DemoBlock>
      </Column>
    </Columns>
    <Columns space="300">
      <Column width={1 / 6}>
        <DemoBlock>1/6</DemoBlock>
      </Column>
      <Column width={2 / 6}>
        <DemoBlock>2/6</DemoBlock>
      </Column>
      <Column width={1 / 2}>
        <DemoBlock>1/2</DemoBlock>
      </Column>
    </Columns>
  </>
));
