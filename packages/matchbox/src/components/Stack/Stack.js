import React from 'react';
import { system } from 'styled-system';
import { Box } from '../Box';
import styled from 'styled-components';
import propTypes from '@styled-system/prop-types';

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  ${() =>
    system({
      gutter: {
        property: 'paddingBottom',
        scale: 'space',
      },
    })}
  ${() =>
    system({
      alignment: {
        property: 'alignItems',
        defaultScale: {
          center: 'center',
          left: 'flex-start',
          right: 'flex-end',
        },
      },
    })}
`;

function Stack(props) {
  const { children, align, space = '500' } = props;
  const items = React.Children.toArray(children);

  if (items.length <= 1 && !align) {
    return <>{items}</>;
  }

  return (
    <div>
      {items.map((child, i) => (
        <StyledBox key={i} alignment={align} gutter={i < items.length - 1 ? space : null}>
          {child}
        </StyledBox>
      ))}
    </div>
  );
}

Stack.propTypes = {
  /**
   * Sets the gutter space between children.
   * Styled-system responsive arrays work here.
   */
  space: propTypes.space.paddingBottom,
  /**
   * Positions children horizontally.
   * Accepts 'center', 'left', 'right', null.
   * Styled-system responsive arrays work here.
   */
  align: propTypes.flexbox.alignItems,
};

Stack.displayName = 'Stack';
export default Stack;
