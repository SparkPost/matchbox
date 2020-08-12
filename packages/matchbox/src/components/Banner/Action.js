import React from 'react';
import { Button } from '../Button';

const Action = React.forwardRef(function Action(props, userRef) {
  return <Button mt={['300', null, '500']} mr="400" {...props} ref={userRef} />;
});

Action.displayName = 'Banner.Action';
Action.propTypes = {
  ...Button.propTypes,
};

export default Action;
