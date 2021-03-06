import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, space, typography, compose } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { deprecate } from '../../helpers/propTypes';

const system = compose(color, space, typography);

const Styledlink = styled.a`
  ${system}
  ${props => {
    if (props.disabled) {
      return `
        &, &:visited {
          opacity: 0.6;
          color: ${props.theme.colors.gray['900']};
          pointer-events: none;
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
    as,
    external,
    onClick,
    role,
    disabled,
    tabIndex,
    ...rest
  } = props;

  const WrapperComponent = as || component || Component;
  const linkTitle = external && !title ? 'Opens in a new tab' : title;
  const linkRole = role ? role : !!onClick ? 'button' : null;

  const disabledAttributes = {
    'aria-disabled': disabled,
    disabled,
    tabIndex: disabled ? '-1' : tabIndex,
    onClick: disabled ? () => false : onClick,
  };

  if (to && !WrapperComponent) {
    return (
      <Styledlink
        as="a"
        href={to}
        target={external ? '_blank' : ''}
        rel={external ? 'noopener noreferrer' : ''}
        title={linkTitle}
        onClick={onClick}
        role={role}
        ref={ref}
        {...rest}
        {...disabledAttributes}
      >
        {children}
      </Styledlink>
    );
  }

  if (WrapperComponent) {
    return (
      <Styledlink
        as={WrapperComponent}
        onClick={onClick}
        ref={ref}
        role={role}
        title={linkTitle}
        to={to}
        {...rest}
        {...disabledAttributes}
      >
        {children}
      </Styledlink>
    );
  }

  return (
    <Styledlink
      as="a"
      title={linkTitle}
      role={linkRole}
      onClick={onClick}
      ref={ref}
      {...rest}
      {...disabledAttributes}
    >
      {children}
    </Styledlink>
  );
});

UnstyledLink.displayName = 'UnstyledLink';

UnstyledLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  disabled: PropTypes.bool,
  title: PropTypes.string,
  external: PropTypes.bool,
  component: deprecate(PropTypes.elementType, 'Use "as" instead'),
  Component: deprecate(PropTypes.elementType, 'Use "as" instead'),
  as: PropTypes.elementType,
  children: PropTypes.node,
  onClick: PropTypes.func,
  role: PropTypes.string,
  tabIndex: PropTypes.string,
  ...createPropTypes(color.propNames),
  ...createPropTypes(space.propNames),
  ...createPropTypes(typography.propNames),
};

export default UnstyledLink;
