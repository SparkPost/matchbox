import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import { negativeTop, negativeLeft, alignChildren, alignYChildren } from './styles';
import { ResponsiveValue } from 'styled-system';
import theme from '../ThemeProvider/theme';

// Negates children padding top
// This is set here to prevent margin collapse
const OuterWrapper = styled('div')`
  padding-top: 1px;
  &:before {
    display: block;
    content: '';
    ${negativeTop}
  }
`;

// Negates children padding left and aligns content
const InnerWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  ${negativeLeft}
  ${alignChildren}
  ${alignYChildren}
`;

type AlignType = 'center' | 'left' | 'right';
type AlignYType = 'center' | 'top' | 'bottom';
type Space = keyof typeof theme.space;

type InlineProps = {
  children?: React.ReactNode;
  align?: ResponsiveValue<AlignType>;
  alignY?: ResponsiveValue<AlignYType>;
  space?: ResponsiveValue<Space>;
};

function Inline(props: InlineProps): JSX.Element {
  const { children, align, alignY = 'center', space = '400' } = props;
  const items = React.Children.toArray(children);

  return (
    <OuterWrapper gutter={space} data-id={props['data-id']}>
      <InnerWrapper gutter={space} align={align} alignY={alignY}>
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
