import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Box, Text, Button, Inline } from '@sparkpost/matchbox';

describe('Inline', () => {
  add('spacing', () => (
    <div>
      <Text m="500">Spacing:</Text>
      <Box m="500" width="260px" bg="green.200">
        <Inline space="200">
          <Button color="blue">Foo</Button>
          <Button color="blue">Bar</Button>
          <Button color="blue">Foo Bar</Button>
          <Button color="blue">Foo</Button>
          <Button color="blue">Foo</Button>
          <Button color="blue">Bar</Button>
          <Button color="blue">Foo Bar</Button>
          <Button color="blue">Foo</Button>
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

  add('horizontal alignment', () => (
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

  add('vertical alignment', () => (
    <div>
      <Text m="500">Y Alignment:</Text>
      <Box m="500" width="260px" bg="green.200">
        <Inline alignY="top">
          <Box bg="blue.500" height="50px" width="50px" />
          <Box bg="blue.500" height="60px" width="50px" />
          <Box bg="blue.500" height="70px" width="50px" />
          <Box bg="blue.500" height="50px" width="80px" />
          <Box bg="blue.500" height="70px" width="50px" />
          <Box bg="blue.500" height="60px" width="50px" />
          <Box bg="blue.500" height="50px" width="50px" />
          <Box bg="blue.500" height="40px" width="50px" />
        </Inline>
      </Box>
      <Text m="500">Responsive Y Alignment:</Text>
      <Box m="500" width="260px" bg="green.200">
        <Inline alignY={['top', 'center', 'bottom', 'top']}>
          <Box bg="blue.500" height="50px" width="50px" />
          <Box bg="blue.500" height="60px" width="50px" />
          <Box bg="blue.500" height="70px" width="50px" />
          <Box bg="blue.500" height="50px" width="80px" />
          <Box bg="blue.500" height="70px" width="50px" />
          <Box bg="blue.500" height="60px" width="50px" />
          <Box bg="blue.500" height="50px" width="50px" />
          <Box bg="blue.500" height="40px" width="50px" />
        </Inline>
      </Box>
    </div>
  ));
});
