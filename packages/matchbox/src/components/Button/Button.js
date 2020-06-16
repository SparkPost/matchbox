import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { deprecate } from '../../helpers/propTypes';
import styled from 'styled-components';
import { margin, width, padding, compose } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { omit } from '@styled-system/props';
import { pick } from '../../helpers/systemProps';
import { Box } from '../Box';
import { Spinner } from '../Spinner';

import Group from './Group';
import {
  base,
  visualSize,
  colorVariant,
  disabled,
  fullWidth,
  loader,
  childwrapper,
} from './styles';

// TODO Categorize system props and abstract
const system = compose(margin, width, padding);

export const StyledButton = styled(Box)`
  ${base}
  ${visualSize}
  ${colorVariant}
  ${disabled}
  ${fullWidth}
  ${system}
`;

const StyledLoader = styled.div`
  ${loader}
`;

const ChildWrapper = styled.span`
  ${childwrapper}
`;

const Button = React.forwardRef(function Button(props, ref) {
  const {
    children,

    // Styles
    primary, // Deprecate in favor of color
    color,
    disabled,
    destructive, // Deprecate in favor of color
    loading,
    loadingLabel,

    // Below 3 props to be deprecated for a 'weight' prop
    plain, // Deprecate in favor of flat
    flat,
    outline,
    outlineBorder,

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

  const systemProps = pick(rest, system.propNames);
  const componentProps = omit(rest);

  // Polyfills deprecrated 'Component' prop
  const WrapperComponent = component || Component;

  // Polyfills to be deprecrated 'primary' and 'destructive' prop
  const buttonColor = primary ? 'blue' : destructive ? 'red' : color;

  // Experimenting with a weight prop to replace outline, plain, and flat in the future
  const visualWeight = React.useMemo(() => {
    if (outlineBorder) {
      return 'normal';
    }

    if (outline) {
      return 'outline';
    }

    if (plain || flat) {
      return 'weak';
    }

    return 'strong';
  }, [outline, outlineBorder, plain, flat]);

  const loadingIndicator = React.useMemo(() => {
    return (
      <Transition mountOnEnter unmountOnExit in={loading}>
        {state => (
          <StyledLoader state={state}>
            <Spinner
              color={!outline && !outlineBorder && !plain && !flat ? 'white' : 'gray'}
              size="small"
              label={loadingLabel}
              rotationOnly
            />
          </StyledLoader>
        )}
      </Transition>
    );
  }, [loading]);

  const sharedProps = {
    className,
    disabled: disabled || loading,
    fullWidth,
    onClick,
    onFocus,
    onBlur,
    buttonSize,
    visualWeight,
    buttonColor,
    ref,
    loading,
    ...systemProps,
    ...componentProps,
  };

  const childrenMarkup = React.useMemo(() => {
    return (
      <ChildWrapper aria-hidden={loading} loading={loading}>
        {children}
      </ChildWrapper>
    );
  }, [loading, children]);

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
        {childrenMarkup}
        {loadingIndicator}
      </StyledButton>
    );
  }

  if (to && WrapperComponent) {
    return (
      <StyledButton as={WrapperComponent} to={to} {...sharedProps}>
        {childrenMarkup}
        {loadingIndicator}
      </StyledButton>
    );
  }

  return (
    <StyledButton as="button" type={submit ? 'submit' : 'button'} {...sharedProps}>
      {childrenMarkup}
      {loadingIndicator}
    </StyledButton>
  );
});

Button.displayName = 'Button';
Button.Group = Group;

Button.propTypes = {
  color: PropTypes.oneOf(['gray', 'orange', 'blue', 'navy', 'purple', 'red']),
  disabled: PropTypes.bool,
  destructive: PropTypes.bool,
  flat: PropTypes.bool,
  plain: deprecate(PropTypes.bool, 'Use `flat` instead'),
  outline: PropTypes.bool,
  outlineBorder: PropTypes.bool,
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
  loading: PropTypes.bool,
  loadingLabel: PropTypes.string,

  // Undocumented helper function
  // https://github.com/styled-system/styled-system/issues/618
  // TODO Abstract when system props are grouped
  ...createPropTypes(margin.propNames),
  ...createPropTypes(padding.propNames),
  ...createPropTypes(width.propNames),
};

Button.defaultProps = {
  size: 'default',
  loadingLabel: 'Loading',
};

export default Button;
