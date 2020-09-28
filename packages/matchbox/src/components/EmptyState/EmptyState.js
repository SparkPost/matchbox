import React from 'react';
import Header from './Header';
import Legacy from './Legacy';

import { Box } from '../Box';
import { Stack } from '../Stack';

function EmptyState(props) {
  return (
    <Box position="relative" height="100vh" py={['500', null, '33vh']} px="500">
      <Stack space={['400', null, null, '600']}>{props.children}</Stack>
    </Box>
  );
}

EmptyState.displayName = 'EmptyState';

EmptyState.Header = Header;
EmptyState.LEGACY = Legacy;

export default EmptyState;
