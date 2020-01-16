import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Stack } from '@sparkpost/matchbox/components/Stack';
import { Box } from '@sparkpost/matchbox/components/Box';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';

addDecorator((storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Layout|Stack'
};

export const Spacing = withInfo({ propTablesExclude: [Box] })(() => (
  <div>
    <Box display='inline-block' verticalAlign='top' m='500' width='100px' bg='green.200'>
      <Stack space='0'>
        <Box bg='blue.400' p='200'>Foo</Box>
        <Box bg='blue.400' p='200'>Bar</Box>
        <Box bg='blue.400' p='200'>Baz</Box>
      </Stack>
    </Box>
    <Box display='inline-block' verticalAlign='top' m='500' width='100px' bg='green.200'>
      <Stack space='200'>
        <Box bg='blue.400' p='200'>Foo</Box>
        <Box bg='blue.400' p='200'>Bar</Box>
        <Box bg='blue.400' p='200'>Baz</Box>
      </Stack>
    </Box>
    <Box display='inline-block' verticalAlign='top' m='500' width='100px' bg='green.200'>
      <Stack space='400'>
        <Box bg='blue.400' p='200'>Foo</Box>
        <Box bg='blue.400' p='200'>Bar</Box>
        <Box bg='blue.400' p='200'>Baz</Box>
      </Stack>
    </Box>
    <Box display='inline-block' verticalAlign='top' m='500' width='100px' bg='green.200'>
      <Stack space='600'>
        <Box bg='blue.400' p='200'>Foo</Box>
        <Box bg='blue.400' p='200'>Bar</Box>
        <Box bg='blue.400' p='200'>Baz</Box>
      </Stack>
    </Box>
    <Box display='inline-block' verticalAlign='top' m='500' width='100px' bg='green.200'>
      <Stack space='800'>
        <Box bg='blue.400' p='200'>Foo</Box>
        <Box bg='blue.400' p='200'>Bar</Box>
        <Box bg='blue.400' p='200'>Baz</Box>
      </Stack>
    </Box>
  </div>
));

export const Alignment = withInfo({ propTablesExclude: [Box] })(() => (
  <div>
    <Box display='inline-block' verticalAlign='top' m='500' width='150px' bg='green.200'>
      <Stack align='right'>
        <Box bg='blue.400' p='200'>Foo</Box>
        <Box bg='blue.400' p='200'>Bar</Box>
        <Box bg='blue.400' p='200'>Baz</Box>
      </Stack>
    </Box>
    <Box display='inline-block' verticalAlign='top' m='500' width='150px' bg='green.200'>
      <Stack align='center'>
        <Box bg='blue.400' p='200'>Foo</Box>
        <Box bg='blue.400' p='200'>Bar</Box>
        <Box bg='blue.400' p='200'>Baz</Box>
      </Stack>
    </Box>
    <Box display='inline-block' verticalAlign='top' m='500' width='150px' bg='green.200'>
      <Stack align='left'>
        <Box bg='blue.400' p='200'>Foo</Box>
        <Box bg='blue.400' p='200'>Bar</Box>
        <Box bg='blue.400' p='200'>Baz</Box>
      </Stack>
    </Box>
    <Box display='inline-block' verticalAlign='top' m='500' width='150px' bg='green.200'>
      <Stack>
        <Box bg='blue.400' p='200'>Foo</Box>
        <Box bg='blue.400' p='200'>Bar</Box>
        <Box bg='blue.400' p='200'>Baz</Box>
      </Stack>
    </Box>
  </div>
));

export const ResponsiveProps = withInfo({ propTablesExclude: [Box] })(() => (
  <div>
    <Box m='500' bg='green.200'>
      <Stack
        align={[null, 'right', 'center', 'left', 'center']}
        space={['100', '300', '500', '700']}
        >
        <Box bg='blue.400' p='200'>Resize</Box>
        <Box bg='blue.400' p='200'>My</Box>
        <Box bg='blue.400' p='200'>Viewport</Box>
      </Stack>
    </Box>
  </div>
));
