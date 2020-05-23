import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { Inline } from '@sparkpost/matchbox/components/Inline';
import { Box, Text } from '@sparkpost/matchbox/components';

export default {
  title: 'Layout|Inline',
};

export const Spacing = withInfo({ propTables: [Inline] })(() => (
  <div>
    <Text m="500">Spacing:</Text>
    <Box m="500" width="260px" bg="green.200">
      <Inline space="200">
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="80px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
      </Inline>
    </Box>
    <Text m="500">Responsive Spacing:</Text>
    <Box m="500" width="260px" bg="green.200">
      <Inline space={['200', '400', '500', '50px']}>
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="80px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
      </Inline>
    </Box>
  </div>
));

export const Alignment = withInfo({ propTables: [Inline] })(() => (
  <div>
    <Text m="500">Alignment:</Text>
    <Box m="500" width="260px" bg="green.200">
      <Inline align="center">
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="80px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
      </Inline>
    </Box>
    <Text m="500">Responsive Alignment:</Text>
    <Box m="500" width="260px" bg="green.200">
      <Inline align={['left', 'center', 'right', 'center']}>
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="80px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
        <Box bg="blue.500" height="50px" width="50px" />
      </Inline>
    </Box>
  </div>
));
