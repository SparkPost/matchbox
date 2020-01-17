import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
import css from '@styled-system/css';
import propTypes from '@styled-system/prop-types';
import { mapStyledSystemResponsiveProp } from '../../helpers/styledSystem';
import { negativeMargin } from './styles';

// Negates children padding top
const OuterWrapper = styled('div')`
  padding-top: 1px;
  &:before {
    display: block;
    content: "";
    ${(props) => negativeMargin(props.childMargin, 'top')}
  }
`;

// Negates children padding left and aligns content
const InnerWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  ${(props) => negativeMargin(props.childMargin, 'left')}
  ${(props) => css({ justifyContent: props.alignProps })}
`;

function Inline(props) {
  const { children, align, space = '400' } = props;
  const items = React.Children.toArray(children);

  const alignProps = React.useMemo(() => mapStyledSystemResponsiveProp({
    center: 'center',
    left: 'flex-start',
    right: 'flex-end'
  }, align), [align, mapStyledSystemResponsiveProp]);

  if (items.lengh <= 1 && !align) {
    return <>{items}</>;
  }

  return (
    <OuterWrapper childMargin={space}>
      <InnerWrapper childMargin={space} alignProps={alignProps}>
        {items.map((child, i) => (
          <Box key={i} display="inline-flex" pt={space} pl={space}>
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
  align: propTypes.flexbox.justifyContent
};

Inline.displayName = 'Inline';
export default Inline;
