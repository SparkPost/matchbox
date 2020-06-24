import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '../Box';

const StyledBox = styled(Box)`
  float: ${props => (props.float ? 'right' : 'none')};
`;

function OptionalLabel(props) {
  const { float } = props;
  return (
    <StyledBox
      float={float}
      as="span"
      fontSize="200"
      fontWeight="400"
      lineHeight="200"
      m="0"
      color="gray.700"
    >
      Optional
    </StyledBox>
  );
}

OptionalLabel.displayName = 'OptionalLabel';
OptionalLabel.propTypes = {
  float: PropTypes.bool,
};

export default OptionalLabel;
