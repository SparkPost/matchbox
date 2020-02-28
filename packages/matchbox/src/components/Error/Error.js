import React from 'react';
import { ErrorIcon } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';

function Error(props) {
  const { className, error, wrapper: WrapperComponent = 'div' } = props;

  return (
    <Box as={WrapperComponent} className={className}>
      <Box as="span" display="inline-flex" color="red.700">
        <Box as="span" flex="0" mr="100" display="flex" alignItems="center">
          <ErrorIcon size={14} />
        </Box>
        <Box as="span" flex="1" fontSize="200" lineHeight="200">
          {error}
        </Box>
      </Box>
    </Box>
  );
}

Error.displayName = 'Error';
export default Error;
