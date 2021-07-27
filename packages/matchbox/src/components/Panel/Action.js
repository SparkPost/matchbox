import React from 'react';
import { Button } from '../Button';

const Action = React.forwardRef(function Action(props, userRef) {
  return <Button color="blue" {...props} variant="text" size="small" ref={userRef} />;
});

Action.displayName = 'Panel.Action';
Action.propTypes = {
  ...Button.propTypes,
};
export default Action;
