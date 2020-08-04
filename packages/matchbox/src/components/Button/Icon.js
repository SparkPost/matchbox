import React from 'react';
import { margin } from 'styled-system';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  ${margin}
`;

const Icon = React.forwardRef(function Icon(props, ref) {
  const { as } = props;
  return (
    <StyledIcon as={as} ref={ref}>
      test
    </StyledIcon>
  );
});

Icon.displayName = 'Button.Icon';
Icon.propTypes = {};

export default Icon;
