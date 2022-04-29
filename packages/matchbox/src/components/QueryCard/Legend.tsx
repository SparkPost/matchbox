import React from 'react';
import { Box, BoxProps } from '../Box';

export type QueryCardLegendProps = {
  color?: BoxProps['bg'];
};

const Legend = React.forwardRef<HTMLDivElement, QueryCardLegendProps>(function QueryCard(
  props,
  userRef,
) {
  const { color = 'blue.700' } = props;
  return (
    <Box display="inline-block" borderRadius="circle" size="400" bg={color} ref={userRef}></Box>
  );
});

Legend.displayName = 'QueryCard.Legend';
export default Legend;
