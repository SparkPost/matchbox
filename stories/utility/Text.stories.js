import React from 'react';
import { Text } from '@sparkpost/matchbox/components/Text';
import { Box } from '@sparkpost/matchbox/components/Box';

export default {
  title: 'Utility/Text',
};

export const Styled = () => (
  <Text as="h1" m="800" color="purple.700" fontSize="600" lineHeight="600" fontWeight="normal">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
  </Text>
);

export const Truncated = () => (
  <Box width="120px" m="800">
    <Text truncate as="p">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
    </Text>
  </Box>
);

export const ExampleOfTags = () => (
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
);

export const LooksLike = () => (
  <Box>
    <Text as="h1" looksLike="h4">
      Is h1, Looks Like h4
    </Text>
    <Text as="h2" looksLike="h6">
      Is h2, Looks Like h6
    </Text>
    <Text as="h3" looksLike="h2">
      Is h3, Looks Like h2
    </Text>
    <Text as="h4" looksLike="h1">
      Is h4, Looks Like h1
    </Text>
    <Text as="h5" looksLike="h3">
      Is h5, Looks Like h3
    </Text>
    <Text as="h6" looksLike="h4">
      Is h6, Looks Like h4
    </Text>
    <Text as="p" looksLike="h1">
      Is p, Looks Like h1
    </Text>
  </Box>
);
