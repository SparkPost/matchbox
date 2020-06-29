import React from 'react';
import { Box } from '@sparkpost/matchbox';

function ColorDescriptionGrid(props) {
  return (
    <Box mb="800" display="grid" gridGap="500" gridTemplateColumns="1fr 1fr">
      {props.children}
    </Box>
  );
}

export default ColorDescriptionGrid;
