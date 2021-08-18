import React from 'react';
import styled from 'styled-components';
import { Box } from '../Box';

const StyledBox = styled(Box)`
  float: ${(props) => (props.float ? 'right' : 'none')};
`;

type OptionalLabelProps = {
  float?: boolean;
};

function OptionalLabel(props: OptionalLabelProps): JSX.Element {
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

export default OptionalLabel;
