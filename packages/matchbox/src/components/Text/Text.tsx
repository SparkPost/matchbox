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
import { truncate, lookslike } from './styles';

const system = compose(color, space, typography);

const StyledText = styled('p')`
  ${system}
  ${truncate}
  ${lookslike}
`;

interface BaseProps {
  'data-id'?: string;
  children: React.ReactNode;
  looksLike?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

type PolymorphicText = Polymorphic.ForwardRefComponent<
  'p',
  BaseProps & ColorProps & SpaceProps & TypographyProps
>;

const Text = React.forwardRef(function Text(props, ref) {
  const { as = 'p', looksLike, children, ...rest } = props;

  return (
    <StyledText as={as} lookslike={looksLike} ref={ref} {...rest}>
      {children}
    </StyledText>
  );
}) as PolymorphicText;

Text.displayName = 'Text';
export default Text;
