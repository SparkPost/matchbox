import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { InlineCode, Box } from '@sparkpost/matchbox';

export default {
  title: 'Utility|InlineCode',
};

export const BasicExample = withInfo()(() => (
  <Box as="p" fontSize="300">
    This is a regular paragraph with some <InlineCode>inline code</InlineCode>
  </Box>
));
