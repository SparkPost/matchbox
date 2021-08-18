import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
// @ts-ignore
import { Stack, Box } from '@sparkpost/matchbox';
import { Column, Columns } from '@sparkpost/matchbox';

type DemoProps = {
  height?: string | number;
  children?: React.ReactNode;
  p?: string | number;
};

const DemoBlock = ({ height = 'auto', children, p = '300' }: DemoProps) => {
  return (
    <Box display="flex" alignItems="center" bg="blue.400" height={height} p={p}>
      {children}
    </Box>
  );
};

describe('Columns', () => {
  const ref = React.useRef(null);
  add('widths', () => (
    <Stack>
      <Columns space="300">
        <Column>
          <DemoBlock>Fluid</DemoBlock>
        </Column>
        <Column width="content">
          <DemoBlock>Content</DemoBlock>
        </Column>
      </Columns>
      <Columns space="300">
        <Column width={[2 / 3, null, 1 / 3]}>
          <DemoBlock>1/3</DemoBlock>
        </Column>
        <Column width={[1 / 3, null, 2 / 3]}>
          <DemoBlock>2/3</DemoBlock>
        </Column>
      </Columns>
      <Columns collapseBelow={'md'} space="300" reverse={[true, null, false]}>
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
    </Stack>
  ));

  add('space', () => (
    <Stack>
      <Columns space="100">
        <Column>
          <DemoBlock>100</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>100</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>100</DemoBlock>
        </Column>
      </Columns>
      <Columns space="200">
        <Column>
          <DemoBlock>200</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>200</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>200</DemoBlock>
        </Column>
      </Columns>
      <Columns space="300">
        <Column>
          <DemoBlock>300</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>300</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>300</DemoBlock>
        </Column>
      </Columns>
      <Columns space="400">
        <Column>
          <DemoBlock>400</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>400</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>400</DemoBlock>
        </Column>
      </Columns>
      <Columns space="500">
        <Column>
          <DemoBlock>500</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>500</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>500</DemoBlock>
        </Column>
      </Columns>
      <Columns space="600">
        <Column>
          <DemoBlock>600</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>600</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>600</DemoBlock>
        </Column>
      </Columns>
      <Columns space="700">
        <Column>
          <DemoBlock>700</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>700</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>700</DemoBlock>
        </Column>
      </Columns>
      <Columns space="800">
        <Column>
          <DemoBlock>800</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>800</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>800</DemoBlock>
        </Column>
      </Columns>
    </Stack>
  ));

  add('alignment', () => (
    <Stack>
      <Columns space="300" align={['right', null, 'left']}>
        <Column width={1 / 2}>
          <DemoBlock>Left Aligned</DemoBlock>
        </Column>
      </Columns>
      <Columns space="300" align="center">
        <Column width={1 / 2}>
          <DemoBlock>Center Aligned</DemoBlock>
        </Column>
      </Columns>
      <Columns space="300" align={['left', null, 'right']}>
        <Column width={1 / 2}>
          <DemoBlock>Right Aligned</DemoBlock>
        </Column>
      </Columns>
      <Columns mt={600} space="800" alignY={['bottom', null, 'center']}>
        <Column>
          <DemoBlock height={800} p={700}>
            Column 1
          </DemoBlock>
        </Column>
        <Column>
          <DemoBlock>Column 2</DemoBlock>
        </Column>
      </Columns>
    </Stack>
  ));

  add('reverse', () => (
    <Stack>
      <Columns space="300" reverse>
        <Column>
          <DemoBlock>Column 1</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>Column 2</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>Column 3</DemoBlock>
        </Column>
      </Columns>
      <Columns space="300" reverse={[true, null, false]}>
        <Column>
          <DemoBlock>Column 1</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>Column 2</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>Column 3</DemoBlock>
        </Column>
      </Columns>
    </Stack>
  ));

  add('collapse below', () => (
    <Columns space="300" collapseBelow="md">
      <Column>
        <DemoBlock>Column 1</DemoBlock>
      </Column>
      <Column>
        <DemoBlock>Column 2</DemoBlock>
      </Column>
      <Column>
        <DemoBlock>Column 3</DemoBlock>
      </Column>
    </Columns>
  ));

  add('system props', () => (
    <Stack>
      <Columns space="300">
        <Column>
          <DemoBlock>Column 1</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>Column 2</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>Column 3</DemoBlock>
        </Column>
      </Columns>
      <Columns space="300">
        <Column>
          <DemoBlock>Column 1</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>Column 2</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>Column 3</DemoBlock>
        </Column>
      </Columns>
      <Columns space="300" ml={800} mr={800}>
        <Column>
          <DemoBlock>Column 1</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>Column 2</DemoBlock>
        </Column>
        <Column>
          <DemoBlock>Column 3</DemoBlock>
        </Column>
      </Columns>
    </Stack>
  ));
});
