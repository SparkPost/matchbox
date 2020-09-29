import React from 'react';
import Action from './Action';
import Header from './Header';
import Content from './Content';
import Image from './Image';
import Legacy from './Legacy';
import { getChild } from '../../helpers/children';

import { Box } from '../Box';
import { Inline } from '../Inline';
import { Stack } from '../Stack';

function EmptyState(props) {
  const { children } = props;

  return (
    <Box position="relative" height="100vh" py={['500', null, '33vh']} px="500">
      <Stack space={['400', null, null, '600']}>
        {getChild('EmptyState.Header', children)}
        {getChild('EmptyState.Content', children)}
        <Box width={['auto', null, '45%']}>
          <Inline space="500">{getChild('EmptyState.Action', children)}</Inline>
        </Box>
      </Stack>
      {getChild('EmptyState.Image', children)}
    </Box>
  );
}

EmptyState.displayName = 'EmptyState';

EmptyState.Action = Action;
EmptyState.Header = Header;
EmptyState.Content = Content;
EmptyState.Image = Image;
EmptyState.LEGACY = Legacy;

export default EmptyState;
