import React from 'react';
import { ArrowForward } from '@sparkpost/matchbox-icons';
import { Button, PolymorphicButton } from '../Button';
import { ScreenReaderOnly } from '../ScreenReaderOnly';

const Next = React.forwardRef(function Next(props, userRef) {
  return (
    <Button
      size="small"
      width="600"
      {...props}
      ml={props.ml || props.marginRight || 200}
      ref={userRef}
    >
      <ArrowForward size={16} />
      <ScreenReaderOnly>Next</ScreenReaderOnly>
    </Button>
  );
}) as PolymorphicButton;

Next.displayName = 'Pager.Next';
export default Next;
