import React from 'react';
import { ErrorIcon } from '@sparkpost/matchbox-icons';
import { Box } from '../Box';

function Error(props) {
  const { className, error, wrapper: WrapperComponent = 'div', id, ml = '0' } = props;

  return (
    <Box id={id} as={WrapperComponent} className={className} ml={ml}>
      <Box as="span" color="red.700" fontSize="200" lineHeight="200">
        <Box as="span" display="inline-block" mr="100">
          <ErrorIcon size={14} label="Error" />
        </Box>
        <span>{error}</span>
      </Box>
    </Box>
  );
}

Error.displayName = 'Error';
export default Error;
