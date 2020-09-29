import React from 'react';
import { Button } from '../Button';

const Action = React.forwardRef(function Action(props, userRef) {
  return <Button color="blue" size="large" {...props} ref={userRef} />;
});

Action.displayName = 'EmptyState.Action';
Action.propTypes = {
  ...Button.propTypes,
};
export default Action;
