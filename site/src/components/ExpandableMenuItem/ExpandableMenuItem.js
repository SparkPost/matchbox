import React, { useState } from 'react';
import styled from 'styled-components';

import { ChevronRight } from '@sparkpost/matchbox-icons';
import { Box } from '@sparkpost/matchbox';
import { Link } from 'gatsby';
import { tokens } from '@sparkpost/design-tokens';

const StyledHeader = styled(Box)`
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
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

  return (
    <Box>
      <StyledLink to={!defaultExpanded ? firstRoute : ''}>
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
      </StyledLink>
      {expanded && <Box pl="300">{children}</Box>}
    </Box>
  );
}

export default ExpandableMenuItem;
