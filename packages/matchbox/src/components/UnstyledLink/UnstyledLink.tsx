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
import type * as Types from '../../helpers/types';

// Omits the `color` styled-system prop because it conflicts with the native HTML 'color' attribute
export type UnstyledLinkBaseProps = Omit<
  Types.LinkActionProps & ColorProps & SpaceProps & TypographyProps,
  'color'
>;

type PolymorphicUnstyledLink = Types.ForwardRefComponent<'a', UnstyledLinkBaseProps>;

type DisabledProp = {
  $disabled?: boolean;
};

const system = compose(color, space, typography);

const Styledlink = styled.a<DisabledProp>`
  ${system}
  ${(props) => {
    if (props.$disabled) {
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

/**
 * UnstyledLink component
 * @see https://design.sparkpost.com/components/unstyledlink/api
 */
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
    tabIndex: disabled ? -1 : tabIndex,
    onClick: disabled ? () => false : onClick,
  };

  if (to && !WrapperComponent) {
    return (
      <Styledlink
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
