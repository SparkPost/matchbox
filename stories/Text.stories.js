import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Text } from '@sparkpost/matchbox/components/Text';
import { Box } from '@sparkpost/matchbox/components/Box';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';

addDecorator((storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Text'
};

const infoOptions = {
  propTables: [Text]
};

export const Styled = withInfo(infoOptions)(() => (
  <Text as="h1" m="800" color="purple.700" fontSize="600" lineHeight="600" fontWeight="normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</Text>
));

export const Truncated = withInfo(infoOptions)(() => (
  <Box width='120px' m="800">
    <Text truncate as='p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</Text>
  </Box>
));

export const Cropped = withInfo(infoOptions)(() => (
  <Box display="flex" justifyContent="space-around" m="600" alignItems="center">
    <Box border='400' padding="600">
      <Text crop fontSize="700" lineHeight='700'>CROPPED</Text>
      <Text crop fontSize="700" lineHeight='700'>CROPPED</Text>
      <Text crop fontSize="700" lineHeight='700'>CROPPED</Text>
      <Text crop fontSize="700" lineHeight='700'>CROPPED</Text>
    </Box>
    <Box border='400' padding="600">
      <Box fontSize="700" lineHeight='700'>Not Cropped</Box>
      <Box fontSize="700" lineHeight='700'>Not Cropped</Box>
      <Box fontSize="700" lineHeight='700'>Not Cropped</Box>
      <Box fontSize="700" lineHeight='700'>Not Cropped</Box>
    </Box>
    <Box border='400' padding="200">
      <Text crop fontSize="500" lineHeight='500'>Cropped</Text>
    </Box>
    <Box border='400' padding="200">
      <Box fontSize="500" lineHeight='500'>Not Cropped</Box>
    </Box>
  </Box>
));

export const ExampleOfTags = withInfo(infoOptions)(() => (
  <Box display="flex" justifyContent="space-around" m="600" alignItems="center">
    <Text>Paragraph</Text>
    <Text as="i">Italic</Text>
    <Text as="u">Underline</Text>
    <Text as="abbr">I18N</Text>
    <Text as="cite">Citation</Text>
    <Text as="del">Deleted</Text>
    <Text as="em">Emphasis</Text>
    <Text as="ins">Inserted</Text>
    <Text as="kbd">Ctrl + C</Text>
    <Text as="mark">Highlighted</Text>
    <Text as="s">Strikethrough</Text>
    <Text as="samp">Sample</Text>
    <Text as="sub">sub</Text>
    <Text as="sup">sup</Text>
    <Text as="span">Span</Text>
  </Box>
));
