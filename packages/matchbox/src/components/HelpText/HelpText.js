import React from 'react';
import { Box } from '../Box';
import PropTypes from 'prop-types';

function HelpText(props) {
  return (
    <Box id={props.id} fontSize="200" lineHeight="200" color="gray.700">
      {props.children}
    </Box>
  );
}

HelpText.displayName = 'HelpText';
HelpText.propTypes = {
  children: PropTypes.node,
};

export default HelpText;
