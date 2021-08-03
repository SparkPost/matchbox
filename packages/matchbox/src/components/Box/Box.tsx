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
} from 'styled-system';

type BoxProps = BorderProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TypographyProps & {
    children: React.ReactNode;
  };

const system = compose(border, color, flexbox, grid, layout, position, shadow, space, typography);

const truncate = props => {
  if (props.truncate) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };
  }
};

const Box = styled.div<BoxProps>`
  ${system}
  ${truncate}
`;

Box.displayName = 'Box';
export default Box;
