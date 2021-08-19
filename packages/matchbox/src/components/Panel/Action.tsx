import React from 'react';
import { Button } from '../Button';

type ActionProps = React.ComponentProps<typeof Button>;

const Action = React.forwardRef(function Action(props, userRef) {
  return <Button color="blue" {...props} variant="text" size="small" ref={userRef} />;
}) as React.ForwardRefExoticComponent<ActionProps>;

Action.displayName = 'Panel.Action';

export default Action;
