import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { deprecate } from '../../helpers/propTypes';

import { Text } from '../Text';

const StyledText = styled(Text)`
  ${props => {
    if (props.disabled) {
      return `
        opacity: 0.6;
        color: ${props.theme.colors.gray['900']};
        &:hover {
          color: ${props.theme.colors.gray['900']};
          cursor: not-allowed;
        }
    `;
    }
  }}
`;

const UnstyledLink = React.forwardRef(function UnstyledLink(props, ref) {
  const {
    children,
    to,
    title,
    Component,
    component,
    external,
    onClick,
    role,
    disabled,
    ...rest
  } = props;
  console.log(disabled);

  const WrapperComponent = component || Component;
  const linkTitle = external && !title ? 'Opens in a new tab' : title;
  const linkRole = role ? role : !!onClick ? 'button' : null;

  if (to && !WrapperComponent) {
    return (
      <StyledText
        as="a"
        href={to}
        target={external ? '_blank' : ''}
        rel={external ? 'noopener noreferrer' : ''}
        title={linkTitle}
        onClick={onClick}
        role={role}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {children}
      </StyledText>
    );
  }

  if (WrapperComponent) {
    return (
      <StyledText
        as={WrapperComponent}
        onClick={onClick}
        ref={ref}
        role={role}
        disabled={disabled}
        title={linkTitle}
        to={to}
        {...rest}
      >
        {children}
      </StyledText>
    );
  }

  return (
    <StyledText
      as="a"
      title={linkTitle}
      role={linkRole}
      onClick={onClick}
      ref={ref}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledText>
  );
});

UnstyledLink.displayName = 'UnstyledLink';

UnstyledLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disabled: PropTypes.bool,
  title: PropTypes.string,
  external: PropTypes.bool,
  component: PropTypes.elementType,
  Component: deprecate(PropTypes.elementType, 'Use "component" instead'),
  children: PropTypes.node,
  onClick: PropTypes.func,
  role: PropTypes.string,
};

export default UnstyledLink;
