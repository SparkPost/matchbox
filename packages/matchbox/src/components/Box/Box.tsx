import React from 'react';
import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  compose,
  ResponsiveValue,
} from 'styled-system';
import * as Polymorphic from '../../helpers/types';

interface BoxProps
  extends BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    Omit<PositionProps, 'zIndex'>, // Override because styled-system by default only allows numbers here
    ShadowProps,
    SpaceProps,
    TypographyProps {
  truncate?: boolean;
  children?: React.ReactNode;
  zIndex?: ResponsiveValue<string | number>;
}

type PolymorphicBox = Polymorphic.ForwardRefComponent<'div', BoxProps>;

const system = compose(border, color, flexbox, grid, layout, position, shadow, space, typography);

const truncate = (props: BoxProps) => {
  if (props.truncate) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };
  }
};

const Box = styled.div`
  ${system}
  ${truncate}
` as PolymorphicBox;

Box.displayName = 'Box';
export default Box;
