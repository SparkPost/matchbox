import React from 'react';
import PropTypes from 'prop-types';
import { deprecate } from '../../helpers/propTypes';

import { Text } from '../Text';

const UnstyledLink = React.forwardRef(function UnstyledLink(props, ref) {
  const { children, to, title, Component, component, external, onClick, role, ...rest } = props;

  const WrapperComponent = component || Component;
  const linkTitle = external && !title ? 'Opens in a new tab' : title;
  const linkRole = role ? role : !!onClick ? 'button' : null;

  if (to && !WrapperComponent) {
    return (
      <Text
        as="a"
        href={to}
        target={external ? '_blank' : ''}
        rel={external ? 'noopener noreferrer' : ''}
        title={linkTitle}
        onClick={onClick}
        role={role}
        ref={ref}
        {...rest}
      >
        {children}
      </Text>
    );
  }

  if (WrapperComponent) {
    return (
      <Text
        as={WrapperComponent}
        onClick={onClick}
        ref={ref}
        role={role}
        title={linkTitle}
        to={to}
        {...rest}
      >
        {children}
      </Text>
    );
  }

  return (
    <Text as="a" title={linkTitle} role={linkRole} onClick={onClick} ref={ref} {...rest}>
      {children}
    </Text>
  );
});

UnstyledLink.displayName = 'UnstyledLink';

UnstyledLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  external: PropTypes.bool,
  component: PropTypes.elementType,
  Component: deprecate(PropTypes.elementType, 'Use "component" instead'),
  children: PropTypes.node,
  onClick: PropTypes.func,
  role: PropTypes.string,
};

export default UnstyledLink;
