import React from 'react';
import { CheckBox } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';
import { HelpText } from '../HelpText';
import { StyledLink } from './styles';
import { LinkActionProps } from '../../types/actions';

type BaseProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  helpText?: React.ReactNode;
  highlighted?: boolean;

  /**
   * @deprecated Use Checkboxes instead
   */
  selected?: boolean;

  /**
   * @deprecated Use children instead
   */
  content?: React.ReactNode;

  /**
   * @deprecated Compose actions with ActionList.Section instead
   */
  group?: number | string;

  /**
   * @deprecated Compose actions with ActionList.Action instead
   */
  visible?: boolean;
};

type LinkProps = {
  is?: 'link';
} & LinkActionProps &
  React.ComponentPropsWithoutRef<'a'> &
  BaseProps;

type ButtonProps = {
  is: 'button';
} & React.ComponentPropsWithoutRef<'button'> &
  BaseProps;

type ActionProps = LinkProps | ButtonProps;

const Action = React.forwardRef<HTMLAnchorElement, ActionProps>(function Action(
  props: ActionProps,
  userRef,
) {
  const { content, children, disabled, helpText, is = 'link', selected, ...action } = props;

  const linkContent = React.useMemo(() => {
    return (
      <Box as="span" alignItems="flex-start" display="flex">
        <Box as="span" flex="1" fontSize="300" lineHeight="300">
          {content}
          {children}
        </Box>
        {selected && (
          <Box as="span" color="blue.700">
            <CheckBox size={20} />
          </Box>
        )}
        {helpText && <HelpText>{helpText}</HelpText>}
      </Box>
    );
  }, [content, selected, helpText]);

  return (
    <StyledLink
      as={is === 'button' ? 'button' : null}
      type={is === 'button' ? 'button' : null}
      disabled={disabled}
      isType={is}
      ref={userRef}
      role="menuitem"
      tabIndex="-1"
      {...action}
    >
      {linkContent}
    </StyledLink>
  );
});

Action.displayName = 'ActionList.Action';

export default Action;
