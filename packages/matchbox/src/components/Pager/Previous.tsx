import React from 'react';
import { ArrowBack } from '@sparkpost/matchbox-icons';
import { Button, PolymorphicButton } from '../Button';
import { ScreenReaderOnly } from '../ScreenReaderOnly';

const Previous = React.forwardRef(function Previous(props, userRef) {
  return (
    <Button
      size="small"
      width="600"
      {...props}
      mr={props.mr || props.marginRight || 200}
      ref={userRef}
    >
      <ArrowBack size={16} />
      <ScreenReaderOnly>Previous</ScreenReaderOnly>
    </Button>
  );
}) as PolymorphicButton;

Previous.displayName = 'Pager.Previous';
export default Previous;
