import React from 'react';
import PropTypes from 'prop-types';
import InlineCode from '../InlineCode';
import { Box, Inline } from '@sparkpost/matchbox';

function Prop(props) {
  const { children, name, type, defaultValue, required, values } = props;

  return (
    <Box mb="600">
      <Inline space="500">
        <Box
          as="h6"
          p="0"
          display="inline-block"
          fontSize="400"
          m="0"
          color="gray.900"
        >
          {name}
        </Box>

        <Box fontSize="300" color="gray.700">
          {type}
        </Box>
        {defaultValue && (
          <Box>
            <Box fontSize="300" color="gray.700">
              default: {defaultValue}
            </Box>
          </Box>
        )}
        {required && (
          <Box as="span" fontSize="200" color="blue.700">
            Required
          </Box>
        )}
      </Inline>
      {values && (
        <Inline space="100">
          Possible values:
          {values.map(value => (
            <Box>
              <InlineCode>{value}</InlineCode>
            </Box>
          ))}
        </Inline>
      )}
      <Box m="0" mt="100">
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
  defaultValue: PropTypes.string,
  values: PropTypes.array
};

export default Prop;
