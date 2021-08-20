import React from 'react';
import { Button } from '../Button';
import * as Polymorphic from '../../helpers/types';

type ActionProps = Omit<React.ComponentProps<typeof Button>, 'as'>;
type PolymorphicAction = Polymorphic.ForwardRefComponent<'button', ActionProps>;

const Action = React.forwardRef(function Action(props, userRef) {
  return <Button color="blue" {...props} variant="text" size="small" ref={userRef} />;
}) as PolymorphicAction;

Action.displayName = 'Panel.Action';

export default Action;
