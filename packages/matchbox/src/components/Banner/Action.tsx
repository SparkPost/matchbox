import React from 'react';
import { Button, ButtonProps } from '../Button';

export type BannerActionProps = ButtonProps;

const Action = React.forwardRef<HTMLButtonElement, BannerActionProps>(function Action(
  props,
  userRef,
) {
  return <Button mt={['300', null, '500']} mr="400" {...props} ref={userRef} />;
}) as React.ForwardRefExoticComponent<BannerActionProps>;

Action.displayName = 'Banner.Action';

export default Action;
