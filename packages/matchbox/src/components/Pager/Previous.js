import React from 'react';
import { ArrowBack } from '@sparkpost/matchbox-icons';
import { Button } from '../Button';
import { ScreenReaderOnly } from '../ScreenReaderOnly';

const Previous = props => (
  <Button {...props} mr={200}>
    <ArrowBack size={16} />

    <ScreenReaderOnly>Previous</ScreenReaderOnly>
  </Button>
);

Previous.displayName = 'Pager.Previous';

export default Previous;
