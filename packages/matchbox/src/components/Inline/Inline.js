import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';
import { negativeTop, negativeLeft, alignChildren } from './styles';

// Negates children padding top
// Overflow: auto is set here to prevent margin collapse
// If this becomes flakey, padding-top: 1px is also an option
const OuterWrapper = styled('div')`
  overflow: auto;
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
  align-items: center;
  ${negativeLeft}
  ${alignChildren}
`;

function Inline(props) {
  const { children, align, space = '400' } = props;
  const items = React.Children.toArray(children);

  return (
    <OuterWrapper gutter={space}>
      <InnerWrapper gutter={space} align={align}>
        {items.map((child, i) => (
          <Box key={i} pt={space} pl={space}>
            {child}
          </Box>
        ))}
      </InnerWrapper>
    </OuterWrapper>
  );
}

Inline.propTypes = {
  /**
   * Sets the gutter space between children.
   * Styled-system responsive arrays work here.
   */
  space: propTypes.space.margin,
  /**
   * Positions children horizontally.
   * Accepts 'center', 'left', 'right', null.
   * Styled-system responsive arrays work here.
   */
  align: propTypes.flexbox.justifyContent,
};

Inline.displayName = 'Inline';
export default Inline;
