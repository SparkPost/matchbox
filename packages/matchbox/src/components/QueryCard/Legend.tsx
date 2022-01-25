import React from 'react';
import { Box, BoxProps } from '../Box';

type QueryCardLegendProps = {
  color?: BoxProps['bg'];
};

const Legend = React.forwardRef<HTMLDivElement, QueryCardLegendProps>(function QueryCard(
  props,
  userRef,
) {
  return (
    <Box
      display="inline-block"
      borderRadius="circle"
      size="400"
      bg={props.color}
      ref={userRef}
    ></Box>
  );
});

Legend.displayName = 'QueryCard.Legend';
export default Legend;
