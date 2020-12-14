import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';
import { negativeTop, negativeLeft, alignChildren, alignYChildren } from './styles';

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

function Inline(props) {
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

Inline.propTypes = {
  'data-id': PropTypes.string,
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
  alignY: propTypes.flexbox.alignItems,
};

Inline.displayName = 'Inline';
export default Inline;
