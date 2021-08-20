import React from 'react';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  compose,
} from 'styled-system';
import type * as Polymorphic from '../../helpers/types';

const system = compose(color, space, typography);

const Styledlink = styled.a`
  ${system}
  ${(props) => {
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

export type BaseProps = React.ComponentPropsWithRef<'a'> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  to?: string | { [key: string]: any }; // object here to support react router: https://reactrouter.com/web/api/location
  disabled?: boolean;
  external?: boolean;
  /**
   * @deprecated Use `as` instead
   */
  component?: React.ElementType;
  /**
   * @deprecated Use `as` instead
   */
  Component?: React.ElementType;
};

type PolymorphicUnstyledLink = Polymorphic.ForwardRefComponent<
  'a',
  BaseProps & ColorProps & SpaceProps & TypographyProps
>;

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
}) as PolymorphicUnstyledLink;

UnstyledLink.displayName = 'UnstyledLink';
export default UnstyledLink;
