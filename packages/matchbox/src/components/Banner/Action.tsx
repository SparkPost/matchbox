import React from 'react';
import { Button, PolymorphicButton } from '../Button';

const Action = React.forwardRef(function Action(props, userRef) {
  return <Button mt={['300', null, '500']} mr="400" {...props} ref={userRef} />;
}) as PolymorphicButton;

Action.displayName = 'Banner.Action';

export default Action;
