import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import styled from 'styled-components';
import { margin } from 'styled-system';

const OuterWrapper = styled('div')`
  ${margin}
`;

function Footer(props) {
  const {
    // Left aligned content
    left,
    // Right aligned content
    right,
    ...rest
  } = props;

  return (
    <OuterWrapper {...rest}>
      <Box display="flex" justifyContent="space-between">
        <Box flex="1" textAlign="left">
          {left}
        </Box>
        <Box flex="1" textAlign="right">
          {right}
        </Box>
      </Box>
    </OuterWrapper>
  );
}

Footer.displayName = 'Panel.Footer';
Footer.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default Footer;
