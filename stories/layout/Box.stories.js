import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Box } from '@sparkpost/matchbox/components/Box';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';

addDecorator(withInfo({ propTables: [Box] }));
addDecorator((storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Layout|Box',
};

export const StyledBox = () => (
  <Box
    color="gray.1000"
    fontWeight="semibold"
    bg={["teal.200", "yellow.200", "red.200", "purple.200", "blue.200"]}
    py="200"
    px="300"
    m="400"
    borderRadius="200"
    border={400}>
      Just a Box
  </Box>
);

export const FlexyBox = () => (
  <Box display="flex" my="400" justifyContent="space-around">
    <Box bg="magenta.400" padding="600"></Box>
    <Box bg="purple.400" padding="600"></Box>
    <Box bg="blue.400" padding="600"></Box>
  </Box>
);

export const GriddyBox = () => (
  <Box display="grid" m="400" gridTemplateColumns="2fr 1fr 1fr" gridGap="400">
    <Box bg="purple.200" padding="400"></Box>
    <Box bg="purple.300" padding="400"></Box>
    <Box bg="purple.400" padding="400"></Box>
    <Box bg="blue.400" padding="400" gridColumn="1 / 4"></Box>
    <Box bg="magenta.300" padding="400" gridColumn="1 / 3"></Box>
    <Box bg="magenta.400" padding="400" gridColumn="3 / 4"></Box>
  </Box>
);
