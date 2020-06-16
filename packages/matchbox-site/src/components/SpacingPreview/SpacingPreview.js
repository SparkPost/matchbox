import React from 'react';
import { tokens, meta } from '@sparkpost/design-tokens';
import _ from 'lodash';
import styled from 'styled-components';

import { Box } from '@sparkpost/matchbox';

const StyledColumn = styled(Box)`
  background-color: ${tokens.color_blue_700};
  border-radius: ${tokens.borderRadius_100};
  height: ${tokens.spacing_800};
`;

const spacingScale = _.filter(
  meta,
  ({ name, value, category }) =>
    !name.includes('base') &&
    category === 'spacing' &&
    value !== '0rem' &&
    !name.match(/50$/)
).reverse();

function SpacingPreview() {
  return (
    <Box display="flex" justifyContent="space-between" mb="400">
      {_.map(spacingScale, spc => (
        <Box
          key={spc.pixel_value}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <StyledColumn style={{ width: spc.pixel_value }}></StyledColumn>
          <Box as="p" fontSize="100" color="gray.800" fontWeight="500" mt="300">
            {spc.pixel_value}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default SpacingPreview;
