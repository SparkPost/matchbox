import React from 'react';
import { CheckBox } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';
import { HelpText } from '../HelpText';
import { StyledLink, StyledButton } from './styles';
import { LinkActionProps, ForwardRefComponent } from '../../helpers/types';

type ActionListActionProps = LinkActionProps & {
  children?: React.ReactNode;
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
  ActionListActionProps;

type ButtonProps = {
  is?: 'button';
} & LinkActionProps &
  React.ComponentPropsWithoutRef<'button'> &
  ActionListActionProps;

function Content(props: ActionListActionProps): JSX.Element {
  const { content, children, selected, helpText } = props;

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
}

// TODO fix this any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ButtonAction = React.forwardRef<any, any>(function ButtonAction(props, userRef) {
  const { content, children, disabled, helpText, selected, highlighted, ...action } = props;

  return (
    <StyledButton
      type="button"
      disabled={disabled}
      role="menuitem"
      tabIndex={-1}
      $highlighted={highlighted}
      ref={userRef}
      {...action}
    >
      <Content content={content} helpText={helpText} selected={selected}>
        {children}
      </Content>
    </StyledButton>
  );
});

// TODO fix this any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LinkAction = React.forwardRef<any, any>(function LinkAction(props, userRef) {
  const {
    content,
    children,
    disabled,
    helpText,
    selected,
    tabIndex,
    onClick,
    highlighted,
    ...action
  } = props;

  const disabledAttributes = {
    'aria-disabled': disabled,
    disabled,
    tabIndex: disabled ? -1 : tabIndex,
    onClick: disabled ? () => false : onClick,
  };

  return (
    <StyledLink
      $disabled={disabled}
      role="menuitem"
      tabIndex={-1}
      $highlighted={highlighted}
      ref={userRef}
      {...action}
      {...disabledAttributes}
    >
      <Content content={content} helpText={helpText} selected={selected}>
        {children}
      </Content>
    </StyledLink>
  );
});

const Action = React.forwardRef(function Action(props, userRef) {
  const { is = 'link', ...action } = props;

  if (is === 'button') {
    return <ButtonAction ref={userRef} {...action} />;
  }

  return <LinkAction ref={userRef} {...action} />;
}) as ForwardRefComponent<'a' | 'button', LinkProps | ButtonProps>;

Action.displayName = 'ActionList.Action';
export default Action;
