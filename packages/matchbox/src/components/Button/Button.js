import React from 'react';
import PropTypes from 'prop-types';
import { deprecate } from '../../helpers/propTypes';
import styled from 'styled-components';
import { Box } from '../Box';

import Group from './Group';
import { base, size, colorVariant, disabled, fullWidth, group } from './styles';

const StyledBox = styled(Box)`
  ${base}
  ${size}
  ${colorVariant}
  ${disabled}
  ${fullWidth}
`;

const StyledGroup = styled(Group)`
  ${group(StyledBox)}
`;

function Button(props) {
  const {
    children,

    // Styles
    primary, // Deprecate in favor of color
    color,
    disabled,
    destructive,
    plain, // Deprecate in favor of flat
    flat,
    outline,

    // Options
    size,
    fullWidth,
    submit,

    to,
    Component,
    component,
    external,

    // Events
    onClick,
    onFocus,
    onBlur,

    className = '',
    ...rest
  } = props;

  // Polyfills deprecrated 'Component' prop
  const WrapperComponent = component || Component;

  // Polyfills to be deprecrated 'primary' and 'destructive' prop
  const buttonColor = primary ? 'orange' : destructive ? 'red' : color;

  // Experimenting with a weight prop to replace outline, plain, and flat in the future
  const visualWeight = React.useMemo(() => {
    if (outline) {
      return 'normal';
    }

    if (plain || flat) {
      return 'weak';
    }

    return 'strong';
  }, [outline, plain, flat]);

  const sharedProps = {
    className, disabled, fullWidth, onClick, onFocus, onBlur, size, visualWeight, buttonColor, ...rest
  };

  if (to && !WrapperComponent) {
    return (
      <StyledBox
        as='a'
        href={to}
        target={external ? '_blank' : ''}
        rel={external ? 'noopener noreferrer' : ''}
        {...sharedProps}
      >
        {children}
      </StyledBox>
    );
  }

  if (to && WrapperComponent) {
    return (
      <StyledBox
        as={WrapperComponent}
        to={to}
        {...sharedProps}
      >
        {children}
      </StyledBox>
    );
  }

  return (
    <StyledBox
      as='button'
      type={submit ? 'submit' : 'button'}
      {...sharedProps}
    >
      {children}
    </StyledBox>
  );
}

Button.displayName = 'Button';
StyledGroup.displayName = 'Button.Group';
Button.Group = StyledGroup;
Button.propTypes = {
  color: PropTypes.oneOf(['gray', 'blue', 'red']),
  disabled: PropTypes.bool,
  destructive: PropTypes.bool,
  flat: PropTypes.bool,
  plain: deprecate(PropTypes.bool, 'Use `flat` instead'),
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large', 'default']),
  fullWidth: PropTypes.bool,
  submit: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  external: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]),
  Component: deprecate(PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ]), 'Use `component` instead'),
  children: PropTypes.node,
  primary: deprecate(PropTypes.bool, 'Use `color` prop instead')
};

Button.defaultProps = {
  size: 'default'
};

export default Button;
