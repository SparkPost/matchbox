import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import { AlignX, AlignY } from '../../helpers/types';
import { negativeTop, negativeLeft, alignChildren, alignYChildren } from './styles';
import { ResponsiveValue } from 'styled-system';
import { SpaceKeys } from '../ThemeProvider/theme';

type GutterProp = {
  $gutter?: ResponsiveValue<SpaceKeys | string>;
};

type AlignProps = {
  $align?: ResponsiveValue<AlignX>;
  $alignY?: ResponsiveValue<AlignY>;
};

// Negates children padding top
// This is set here to prevent margin collapse
const OuterWrapper = styled('div')<GutterProp>`
  padding-top: 1px;
  &:before {
    display: block;
    content: '';
    ${negativeTop}
  }
`;

// Negates children padding left and aligns content
const InnerWrapper = styled('div')<GutterProp & AlignProps>`
  display: flex;
  flex-wrap: wrap;
  ${negativeLeft}
  ${alignChildren}
  ${alignYChildren}
`;

type InlineProps = {
  children?: React.ReactNode;
  /**
   * Positions children horizontally.
   * Styled-system responsive arrays work here.
   */
  align?: ResponsiveValue<AlignX>;
  /**
   * Positions children vertically.
   * Styled-system responsive arrays work here.
   */
  alignY?: ResponsiveValue<AlignY>;
  /**
   * Sets the gutter space between children.
   * Styled-system responsive arrays work here.
   */
  space?: ResponsiveValue<SpaceKeys | string>;
  'data-id'?: string;
};

function Inline(props: InlineProps): JSX.Element {
  const { children, align, alignY = 'center', space = '400' } = props;
  const items = React.Children.toArray(children);

  return (
    <OuterWrapper $gutter={space} data-id={props['data-id']}>
      <InnerWrapper $gutter={space} $align={align} $alignY={alignY}>
        {items.map((child, i) => (
          <Box key={i} pt={space} pl={space}>
            {child}
          </Box>
        ))}
      </InnerWrapper>
    </OuterWrapper>
  );
}

Inline.displayName = 'Inline';
export default Inline;
