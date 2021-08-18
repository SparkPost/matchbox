import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
// @ts-ignore
import { Box } from '@sparkpost/matchbox';
import { Column, Columns } from '@sparkpost/matchbox';

const DemoBlock = ({ height = 'auto', children, p = '300' }) => {
  return (
    <Box display="flex" alignItems="center" bg="blue.400" height={height} mb="18px" p={p}>
      {children}
    </Box>
  );
};

describe('Column', () => {
  add('widths', () => (
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
  ));
});
