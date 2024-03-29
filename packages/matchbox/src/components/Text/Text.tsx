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
import { clean } from '../../helpers/props';
import { truncate, lookslike } from './styles';

const system = compose(color, space, typography);

const StyledText = styled.p.withConfig(clean([...system.propNames, 'truncate']))`
  ${system}
  ${truncate}
  ${lookslike}
`;

export type TextProps = {
  'data-id'?: string;
  children: React.ReactNode;
  truncate?: boolean;
  looksLike?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
} & ColorProps &
  SpaceProps &
  TypographyProps;

type PolymorphicText = Polymorphic.ForwardRefComponent<'p', TextProps>;

const Text = React.forwardRef(function Text(props, ref) {
  const { as = 'p', looksLike, children, truncate, ...rest } = props;

  return (
    <StyledText as={as} $looksLike={looksLike} $truncate={truncate} ref={ref} {...rest}>
      {children}
    </StyledText>
  );
}) as PolymorphicText;

Text.displayName = 'Text';
export default Text;
