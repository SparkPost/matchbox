import React from 'react';
import { Box } from '../Box';
import { mapStyledSystemResponsiveProp } from '../../helpers/styledSystem';
import propTypes from '@styled-system/prop-types';

function Stack(props) {
  const { children, align, space = '400' } = props;
  const items = React.Children.toArray(children);

  if (items.length <= 1 && !align) {
    return <>{items}</>;
  }

  const alignProps = React.useMemo(() => mapStyledSystemResponsiveProp({
    center: 'center',
    left: 'flex-start',
    right: 'flex-end'
  }, align), [align, mapStyledSystemResponsiveProp]);

  return (
    <div>
      {items.map((child, i) => (
        <Box
          key={i}
          display='flex'
          flexDirection='column'
          alignItems={alignProps}
          pb={i < children.length - 1 ? space : null}>
          {child}
        </Box>
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
  align: propTypes.flexbox.alignItems
};

Stack.displayName = 'Stack';
export default Stack;
