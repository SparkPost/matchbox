import React from 'react';
import { CheckBox } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';
import { HelpText } from '../HelpText';
import { StyledLink, StyledButton } from './styles';
import { LinkActionProps } from '../../helpers/types';

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

function Content(props) {
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

function ButtonAction(props: BaseProps) {
  const { content, children, disabled, helpText, selected, highlighted, ...action } = props;

  return (
    <StyledButton
      type="button"
      disabled={disabled}
      role="menuitem"
      tabIndex={-1}
      $highlighted={highlighted}
      {...action}
    >
      <Content content={content} helpText={helpText} selected={selected}>
        {children}
      </Content>
    </StyledButton>
  );
}

function LinkAction(props) {
  const { content, children, disabled, helpText, selected, highlighted, ...action } = props;

  return (
    <StyledLink
      $disabled={disabled}
      role="menuitem"
      tabIndex={-1}
      $highlighted={highlighted}
      {...action}
    >
      <Content content={content} helpText={helpText} selected={selected}>
        {children}
      </Content>
    </StyledLink>
  );
}

type LinkProps = {
  is?: 'link';
} & LinkActionProps &
  React.ComponentPropsWithoutRef<'a'> &
  BaseProps;

type ButtonProps = {
  is?: 'button';
} & LinkActionProps &
  React.ComponentPropsWithoutRef<'button'> &
  BaseProps;

function Action(props: LinkProps | ButtonProps): JSX.Element {
  const { is, ...action } = props;

  if (is === 'button') {
    return <ButtonAction {...action} />;
  }

  return <LinkAction {...action} />;
}

Action.displayName = 'ActionList.Action';
export default Action;
