import React from 'react';
import { ArrowForward } from '@sparkpost/matchbox-icons';
import { Button } from '../Button';
import { ScreenReaderOnly } from '../ScreenReaderOnly';

type NextProps = React.ComponentProps<typeof Button>;

const Next = (props: NextProps): JSX.Element => (
  <Button {...props} ml={props.ml || props.marginRight || 200}>
    <ArrowForward size={16} />
    <ScreenReaderOnly>Next</ScreenReaderOnly>
  </Button>
);

Next.displayName = 'Pager.Next';

export default Next;
