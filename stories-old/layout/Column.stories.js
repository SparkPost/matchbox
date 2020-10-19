import React from 'react';

import { Columns } from '@sparkpost/matchbox/components/Columns';
import { Column } from '@sparkpost/matchbox/components/Column';
import { Box } from '@sparkpost/matchbox/components/Box';

export default {
  title: 'Layout|Column',
};

const DemoBlock = ({ height = 'auto', children, p = '300' }) => {
  return (
    <Box display="flex" alignItems="center" bg="blue.400" height={height} mb="18px" p={p}>
      {children}
    </Box>
  );
};

export const Default = () => (
  <>
    <Columns>
      <Column>
        <DemoBlock>Fluid</DemoBlock>
      </Column>
      <Column width="content">
        <DemoBlock>Content</DemoBlock>
      </Column>
    </Columns>
    <Columns>
      <Column width={1 / 3}>
        <DemoBlock> 1 / 3</DemoBlock>
      </Column>
      <Column>
        <DemoBlock>Fluid</DemoBlock>
      </Column>
    </Columns>
    <Columns>
      <Column width={2 / 3}>
        <DemoBlock> 2 / 3</DemoBlock>
      </Column>
      <Column>
        <DemoBlock>Fluid</DemoBlock>
      </Column>
    </Columns>
    <Columns>
      <Column width={1 / 6}>
        <DemoBlock> 1 / 6</DemoBlock>
      </Column>
      <Column width={2 / 6}>
        <DemoBlock>2/6</DemoBlock>
      </Column>
      <Column width={1 / 2}>
        <DemoBlock>1/2</DemoBlock>
      </Column>
    </Columns>
  </>
);
