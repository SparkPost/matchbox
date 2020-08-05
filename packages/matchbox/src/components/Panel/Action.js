import React from 'react';
import { Button } from '../Button';

const Action = React.forwardRef(function Action(props, userRef) {
  return <Button {...props} flat size="small" color="blue" ref={userRef} />;
});

Action.displayName = 'Panel.Action';
Action.propTypes = {
  ...Button.propTypes,
};
export default Action;
