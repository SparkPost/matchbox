import React from 'react';
import { ArrowForward } from '@sparkpost/matchbox-icons';
import { Button } from '../Button';
import { ScreenReaderOnly } from '../ScreenReaderOnly';

const Next = props => (
  <Button {...props} ml={200}>
    <ArrowForward size={16} />

    <ScreenReaderOnly>Next</ScreenReaderOnly>
  </Button>
);

Next.displayName = 'Pager.Next';

export default Next;
