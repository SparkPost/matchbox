import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '../Box';

type FloatProp = {
  $float?: boolean;
};

const StyledBox = styled(Box)<BoxProps & FloatProp>`
  float: ${(props) => (props.$float ? 'right' : 'none')};
`;

export type OptionalLabelProps = {
  float?: boolean;
};

function OptionalLabel(props: OptionalLabelProps): JSX.Element {
  const { float } = props;
  return (
    <StyledBox
      $float={float}
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
