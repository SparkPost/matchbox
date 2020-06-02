import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Columns } from '@sparkpost/matchbox/components/Columns';
import { Column } from '@sparkpost/matchbox/components/Column';
import { Box } from '@sparkpost/matchbox/components/Box';

export default {
  title: 'Layout|Columns',
};

export const Default = withInfo()(() => (
  <>
    <Columns space="800">
      <Column>Fluid</Column>
      <Column width="content">content</Column>
    </Columns>
    <Columns space="400">
      <Column width={[2 / 3, null, 1 / 3]}>1/3</Column>
      <Column width={[1 / 3, null, 2 / 3]}>2/3</Column>
    </Columns>
    <Columns space="800" alignY={['bottom', null, 'center']}>
      <Column>
        <Box height="800" bg="blue.700">
          <span>Column 1</span>
        </Box>
      </Column>
      <Column>
        <Box bg="blue.700">Column 2</Box>
      </Column>
    </Columns>
    <Columns mt="400" space="300" align={['left', null, 'right']}>
      <Column width={1 / 2}>
        <Box height="800" bg="blue.700">
          <span>Column 1</span>
        </Box>
      </Column>
    </Columns>
    <Columns collapseBelow={'md'} mt="400" space="300" reverse={[true, null, false]}>
      <Column width={1 / 3}>Column 1</Column>
      <Column width={1 / 3}>Column 2</Column>
      <Column width={1 / 3}>Column 3</Column>
    </Columns>
  </>
));
