import React from 'react';
import { Button, ButtonProps } from '../Button';
import type * as Types from '../../helpers/types';

export type PanelActionProps = Omit<ButtonProps, 'size' | 'variant'>;

export type PolymorphicPanelAction = Types.ForwardRefComponent<'button', PanelActionProps>;

const Action = React.forwardRef(function Action(props, userRef) {
  return <Button color="blue" {...props} variant="text" size="small" ref={userRef} />;
}) as PolymorphicPanelAction;

Action.displayName = 'Panel.Action';

export default Action;
