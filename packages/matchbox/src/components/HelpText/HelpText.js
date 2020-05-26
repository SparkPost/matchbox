import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';

const StyledText = styled(Box)`
  a,
  a:visited {
    color: ${tokens.color_gray_700};
  }
`;

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
