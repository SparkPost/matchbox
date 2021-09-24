import React from 'react';
import { Button, PolymorphicButton } from '../Button';

const Action = React.forwardRef(function Action(props, userRef) {
  return <Button color="blue" size="large" {...props} ref={userRef} />;
}) as PolymorphicButton;

Action.displayName = 'EmptyState.Action';
export default Action;
