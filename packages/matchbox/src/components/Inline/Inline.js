import React from 'react';
import { Box } from '../Box';
import styled from 'styled-components';
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

// Negates children padding left
const InnerWrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  ${(props) => negativeMargin(props.childMargin, 'left')}
`;

function Inline(props) {
  const { children, align, space = '400' } = props;
  const items = React.Children.toArray(children);

  if (items.lengh <= 1 && !align) {
    return <>{items}</>;
  }

  return (
    <OuterWrapper childMargin={space}>
      <InnerWrapper childMargin={space}>
        {items.map((child, i) => (
          <Box key={i} display="inline-flex" pt={space} pl={space}>
            {child}
          </Box>
        ))}
      </InnerWrapper>
    </OuterWrapper>
  );
}

export default Inline;
