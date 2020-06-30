import React, { useState } from 'react';
import styled from 'styled-components';

import { ChevronRight } from '@sparkpost/matchbox-icons';
import { Box } from '@sparkpost/matchbox';
import { navigate } from 'gatsby';
import { tokens } from '@sparkpost/design-tokens';

const StyledHeader = styled(Box)`
  cursor: pointer;
`;

const StyledChevronRight = styled(ChevronRight)`
  transform: ${props => (props.expanded ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform ${tokens.motionDuration_fast}
    ${tokens.motionEase_in_out};
`;

function ExpandableMenuItem(props) {
  const { value, defaultExpanded, firstRoute, children } = props;

  const [expanded, setExpanded] = useState(defaultExpanded || false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  function navigateToFirstLink() {
    if (!defaultExpanded) {
      navigate(firstRoute);
    }
  }

  return (
    <div onClick={navigateToFirstLink}>
      <StyledHeader
        width="200px"
        display="flex"
        justifyContent="space-between"
        mt="500"
        mb="300"
        onClick={toggleExpanded}
      >
        <Box fontSize="300" fontWeight="500" color="gray.500">
          {value}
        </Box>
        <Box color="gray.500">
          <StyledChevronRight expanded={expanded} />
        </Box>
      </StyledHeader>
      {expanded && <Box pl="300">{children}</Box>}
    </div>
  );
}

export default ExpandableMenuItem;
