import React from 'react';
import { Button } from '../Button';

type ActionProps = React.ComponentProps<typeof Button>;

const Action = React.forwardRef<HTMLButtonElement, ActionProps>(function Action(
  props: ActionProps,
  userRef,
) {
  return <Button mt={['300', null, '500']} mr="400" {...props} ref={userRef} />;
}) as React.ForwardRefExoticComponent<ActionProps> & {
  Button: typeof Button;
};

Action.displayName = 'Banner.Action';
Action.propTypes = {
  ...Button.propTypes,
};

export default Action;
