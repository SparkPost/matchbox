import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { InlineCode, Box } from '@sparkpost/matchbox';

describe('InlineCode', () => {
  add('basic example', () => (
    <Box as="p" fontSize="300">
      This is a regular paragraph with some <InlineCode>inline code</InlineCode>
    </Box>
  ));
});
