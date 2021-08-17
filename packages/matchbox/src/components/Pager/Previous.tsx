import React from 'react';
import { ArrowBack } from '@sparkpost/matchbox-icons';
import { Button } from '../Button';
import { ScreenReaderOnly } from '../ScreenReaderOnly';

type PreviousProps = React.ComponentProps<typeof Button>;

const Previous = (props: PreviousProps): JSX.Element => (
  <Button {...props} mr={props.mr || props.marginRight || 200}>
    <ArrowBack size={16} />
    <ScreenReaderOnly>Previous</ScreenReaderOnly>
  </Button>
);

Previous.displayName = 'Pager.Previous';

export default Previous;
