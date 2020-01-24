import React from 'react';
import PropTypes from 'prop-types';
import { deprecate } from '../../helpers/propTypes';
import styled from 'styled-components';
import { layout, space, compose } from 'styled-system';
import { Box } from '../Box';

import Group from './Group';
import { base, visualSize, colorVariant, disabled, fullWidth, group } from './styles';

// TODO Categorize system props and abstract
const system = compose(space.margin, layout.width);

export const StyledButton = styled(Box)`
  ${base}
  ${visualSize}
  ${colorVariant}
  ${disabled}
  ${fullWidth}
  ${system}
`;

// Button.Group is styled here to access a classname reference to StyledButton
const StyledGroup = styled(Group)`
  ${group(StyledButton)}
`;

function Button(props) {
  const {
    children,

    // Styles
    primary, // Deprecate in favor of color
    color,
    disabled,
    destructive, // Deprecate in favor of color

    // Below 3 props to be deprecated for a 'weight' prop
    plain, // Deprecate in favor of flat
    flat,
    outline,

    // Options
    // Renaming to prevent `width` and `height` pass through
    // Size is a valid styled-system prop
    size: buttonSize,
    fullWidth,
    submit,

    to,
    Component, // Deprecate in favor of component
    component,
    external,
    title,

    // Events
    onClick,
    onFocus,
    onBlur,

    className = '',
    ...rest // TODO remove spreading of unknown props
  } = props;

  // Polyfills deprecrated 'Component' prop
  const WrapperComponent = component || Component;

  // Polyfills to be deprecrated 'primary' and 'destructive' prop
  const buttonColor = primary ? 'blue' : destructive ? 'red' : color;

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
    className,
    disabled,
    fullWidth,
    onClick,
    onFocus,
    onBlur,
    buttonSize,
    visualWeight,
    buttonColor,
    ...rest,
  };

  if (to && !WrapperComponent) {
    return (
      <StyledButton
        as="a"
        href={to}
        target={external ? '_blank' : ''}
        rel={external ? 'noopener noreferrer' : ''}
        title={external && !title ? 'Opens in a new tab' : title}
        {...sharedProps}
      >
        {children}
      </StyledButton>
    );
  }

  if (to && WrapperComponent) {
    return (
      <StyledButton as={WrapperComponent} to={to} {...sharedProps}>
        {children}
      </StyledButton>
    );
  }

  return (
    <StyledButton as="button" type={submit ? 'submit' : 'button'} {...sharedProps}>
      {children}
    </StyledButton>
  );
}

Button.displayName = 'Button';
StyledGroup.displayName = Group.displayName;
StyledGroup.propTypes = Group.propTypes;
Button.Group = StyledGroup;

Button.propTypes = {
  color: PropTypes.oneOf(['gray', 'orange', 'blue', 'navy', 'purple', 'red']),
  disabled: PropTypes.bool,
  destructive: PropTypes.bool,
  flat: PropTypes.bool,
  plain: deprecate(PropTypes.bool, 'Use `flat` instead'),
  outline: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'large', 'default']),
  fullWidth: PropTypes.bool,
  submit: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  external: PropTypes.bool,
  component: PropTypes.elementType,
  Component: deprecate(PropTypes.elementType, 'Use `component` instead'),
  children: PropTypes.node,
  primary: deprecate(PropTypes.bool, 'Use `color` prop instead'),
};

Button.defaultProps = {
  size: 'default',
};

export default Button;
