import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { deprecate } from '../../helpers/propTypes';
import styled from 'styled-components';
import {
  margin,
  MarginProps,
  width,
  WidthProps,
  padding,
  PaddingProps,
  compose,
} from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { omit } from '@styled-system/props';
import { pick, clean } from '../../helpers/props';
import { Box } from '../Box';
import { Spinner } from '../Spinner';
import Icon from './Icon';
import Group from './Group';
import {
  base,
  focus,
  visualSize,
  colorVariant,
  disabled,
  fullWidth,
  loader,
  childwrapper,
} from './styles';

import type * as Polymorphic from '../../helpers/types';

export function getLoaderColor({ variant = 'filled', color = 'gray' } = {}): string {
  if (variant === 'filled') {
    if (color === 'white') {
      return 'gray';
    }

    return 'white';
  }

  if (color === 'white') {
    return 'white';
  }

  if (color === 'blue') {
    return 'blue';
  }

  return 'gray';
}

// TODO Categorize system props and abstract
const system = compose(margin, width, padding);

export const StyledButton = styled(Box).withConfig(clean(['loading']))`
  ${base}
  ${focus}
  ${visualSize}
  ${colorVariant}
  ${disabled}
  ${fullWidth}
  ${system}
`;

const StyledLoader = styled.div`
  ${loader}
`;

const ChildWrapper = styled.span.withConfig(clean(['loading']))`
  ${childwrapper}
`;

// Handles deprecated button variant props
// TODO Remove in 6.0
function getVariant({ outline, outlineBorder, plain, flat, variant }): string {
  if (variant) {
    return variant;
  }

  if (outlineBorder) {
    return 'outline';
  }

  if (outline) {
    return 'mutedOutline';
  }

  if (plain || flat) {
    return 'text';
  }

  return 'filled';
}

interface BaseProps {
  /**
   * @deprecated Use `as` instead
   */
  component?: React.ElementType;
  /**
   * @deprecated Use `as` instead
   */
  Component?: React.ElementType;
  primary?: boolean;
  color?: 'red' | 'gray' | 'blue' | 'white';
  disabled?: boolean;
  /**
   * @deprecated Use `color` instead
   */
  destructive?: boolean;
  loading?: boolean;
  loadingLabel?: string;
  /**
   * @deprecated Use `variant` instead
   */
  plain?: boolean;
  /**
   * @deprecated Use `variant` instead
   */
  flat?: boolean;
  /**
   * @deprecated Use `variant` instead
   */
  outline?: boolean;
  /**
   * @deprecated Use `variant` instead
   */
  outlineBorder?: boolean;
  variant?: 'outline' | 'mutedOutline' | 'text' | 'filled';
  size?: 'default' | 'small' | 'large';
  to?: string;
  fullWidth?: boolean;
  submit?: boolean;
  external?: boolean;
  title?: string;
  children?: React.ReactNode;
}

type PolymorphicButton = Polymorphic.ForwardRefComponent<'button', BaseProps &
  MarginProps &
  WidthProps &
  PaddingProps>;

const Button = React.forwardRef(
  (props, ref) => {
    const {
      children,

      // Styles
      primary, // Deprecate in favor of color
      color,
      disabled,
      destructive, // Deprecate in favor of color
      loading,
      loadingLabel,

      // Below 3 props to be deprecated for a 'variant' prop
      plain, // Deprecate in favor of flat
      flat,
      outline,
      outlineBorder,
      variant,

      // Options
      // Renaming to prevent `width` and `height` pass through
      // Size is a valid styled-system prop
      size: buttonSize,
      fullWidth,
      submit,

      to,
      Component, // Deprecate in favor of component
      component,
      as,
      external,
      title,

      // Events
      onClick,
      onFocus,
      onBlur,

      className = '',
      ...rest // TODO remove spreading of unknown props
    } = props;

    const transitionRef = React.useRef();

    const systemProps = pick(rest, system.propNames);
    const componentProps = omit(rest);

    // Polyfills deprecrated 'Component' prop — use as instead of component
    const WrapperComponent = as || component || Component;

    // Polyfills to be deprecrated 'primary' and 'destructive' prop
    const buttonColor = primary ? 'blue' : destructive ? 'red' : color;

    const buttonVariant = React.useMemo(() => {
      return getVariant({ variant, outline, outlineBorder, plain, flat });
    }, [variant, outline, outlineBorder, plain, flat, getVariant]);

    const loaderColor = React.useMemo(() => {
      return getLoaderColor({ variant: buttonVariant, color });
    }, [buttonVariant, color]);

    const loadingIndicator = React.useMemo(() => {
      return (
        <Transition mountOnEnter unmountOnExit in={loading} timeout={0} nodeRef={transitionRef}>
          {state => (
            <StyledLoader state={state} ref={transitionRef}>
              <Spinner
                // TODO
                // @ts-ignore
                color={loaderColor}
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
      buttonVariant,
      buttonColor,
      ref,
      loading,
      ...systemProps,
      ...componentProps,
    };

    const childrenMarkup = React.useMemo(() => {
      return (
        <ChildWrapper aria-hidden={loading} loading={loading ? loading : undefined}>
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
      <StyledButton
        as={WrapperComponent || 'button'}
        type={submit ? 'submit' : 'button'}
        {...sharedProps}
      >
        {childrenMarkup}
        {loadingIndicator}
      </StyledButton>
    );
  },
) as PolymorphicButton & {
  Group: typeof Group;
  Icon: typeof Icon;
};

Button.displayName = 'Button';
Button.Group = Group;
Button.Icon = Icon;

Button.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node,
  color: PropTypes.oneOf(['gray', 'orange', 'blue', 'navy', 'purple', 'red', 'white']),
  component: deprecate(PropTypes.elementType, 'Use `as` instead'),
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  loadingLabel: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large', 'default']),
  submit: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  title: PropTypes.string,
  variant: PropTypes.oneOf(['filled', 'outline', 'text', 'mutedOutline']),

  // Deprecated props
  Component: deprecate(PropTypes.elementType, 'Use `as` instead'),
  destructive: deprecate(PropTypes.bool, 'Use the `color` prop instead'),
  flat: deprecate(PropTypes.bool, 'Use `variant` instead'),
  primary: deprecate(PropTypes.bool, 'Use `color` prop instead'),
  outline: deprecate(PropTypes.bool, 'Use `variant` instead'),
  outlineBorder: deprecate(PropTypes.bool, 'Use `variant` instead'),
  plain: deprecate(PropTypes.bool, 'Use `variant` instead'),

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
