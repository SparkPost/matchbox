import React from 'react';
import { Button } from '../Button';

type EmptyStateActionProps = React.ComponentProps<typeof Button>;

const Action = React.forwardRef<HTMLButtonElement, EmptyStateActionProps>(function Action(
  props,
  userRef,
) {
  return <Button color="blue" size="large" {...props} ref={userRef} />;
});

Action.displayName = 'EmptyState.Action';
export default Action;
