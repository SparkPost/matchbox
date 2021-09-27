import React from 'react';
import { Button, PolymorphicButton } from '../Button';

const Action = React.forwardRef(function Action(props, userRef) {
  return <Button color="blue" {...props} variant="text" size="small" ref={userRef} />;
}) as PolymorphicButton;

Action.displayName = 'Panel.Action';

export default Action;
