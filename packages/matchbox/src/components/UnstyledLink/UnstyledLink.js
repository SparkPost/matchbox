import React from 'react';
import PropTypes from 'prop-types';
import { deprecate } from '../../helpers/propTypes';
import styled from 'styled-components';
import { text } from './styles';

import { Text } from '../Text';

const StyledText = styled(Text)`
  ${text}
`;

function UnstyledLink(props) {
  const { children, to, title, Component, component, external, ...rest } = props;

  const WrapperComponent = component || Component;
  const LinkTitle = external && !title ? 'Opens in a new tab' : title;

  if (to && !WrapperComponent) {
    return (
      <StyledText
        as="a"
        href={to}
        target={external ? '_blank' : ''}
        rel={external ? 'noopener noreferrer' : ''}
        title={LinkTitle}
        {...rest}
      >
        {children}
      </StyledText>
    );
  }

  if (WrapperComponent) {
    return (
      <StyledText as={WrapperComponent} to={to} title={LinkTitle} {...rest}>
        {children}
      </StyledText>
    );
  }

  return (
    <StyledText as="a" title={LinkTitle} {...rest}>
      {children}
    </StyledText>
  );
}

UnstyledLink.displayName = 'UnstyledLink';

UnstyledLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  external: PropTypes.bool,
  component: PropTypes.elementType,
  Component: deprecate(PropTypes.elementType, 'Use "component" instead'),
  children: PropTypes.node,
};

export default UnstyledLink;
