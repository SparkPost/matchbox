import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@sparkpost/matchbox';

function Prop(props) {
  const { children, name, type, defaultValue, required } = props;

  return (
    <Box mb="600">
      <Box display="flex" alignItems="center">
        <Box as="h6" fontSize="400" m="0" mb="100" mr="300" color="blue.700">
          {name}
        </Box>
        {required && (
          <Box as="span" fontSize="100" color="gray.700">
            required
          </Box>
        )}
      </Box>
      <Box display="flex">
        <Box mr="800">
          <Box
            as="label"
            display="inline"
            mr="300"
            fontSize="100"
            fontWeight="bold"
          >
            Type
          </Box>
          <Box
            as="p"
            display="inline"
            mb="200"
            fontWeight="regular"
            fontSize="100"
          >
            {type}
          </Box>
        </Box>
        {defaultValue && (
          <Box mr="800">
            <Box
              as="label"
              display="inline"
              mr="300"
              fontSize="100"
              fontWeight="bold"
            >
              Default Value
            </Box>
            <Box
              as="p"
              display="inline"
              mb="200"
              fontWeight="regular"
              fontSize="100"
            >
              {defaultValue}
            </Box>
          </Box>
        )}
      </Box>
      <Box m="0" color="gray.700">
        {children}
      </Box>
    </Box>
  );
}

Prop.displayName = 'Prop';

Prop.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  children: PropTypes.node,
  type: PropTypes.string,
  defaultValue: PropTypes.string
};

export default Prop;
