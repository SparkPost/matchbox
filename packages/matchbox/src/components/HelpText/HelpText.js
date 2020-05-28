import React from 'react';
import { Box } from '../Box';
import PropTypes from 'prop-types';

function HelpText(props) {
  const { id, children, ml = '0' } = props;
  return (
    <Box id={id} fontSize="200" lineHeight="200" m="0" ml={ml} color="gray.700">
      {children}
    </Box>
  );
}

HelpText.displayName = 'HelpText';
HelpText.propTypes = {
  children: PropTypes.node,
};

export default HelpText;
