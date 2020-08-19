import React, { useState } from 'react';
import styled from 'styled-components';

import { ChevronRight } from '@sparkpost/matchbox-icons';
import { Box, styles } from '@sparkpost/matchbox';
import { Link } from 'gatsby';
import { tokens } from '@sparkpost/design-tokens';

const StyledHeader = styled(Box)`
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledChevronButton = styled(Box)`
  ${styles.buttonReset}
  ${styles.focusOutline({ offset: '1px' })}
  cursor: pointer;
`;

const StyledChevronRight = styled(ChevronRight)`
  transform: ${props => (props.expanded ? 'rotate(-90deg)' : 'rotate(90deg)')};
  transition: transform ${tokens.motionDuration_medium}
    ${tokens.motionEase_in_out};
`;

function ExpandableMenuItem(props) {
  const { value, defaultExpanded, firstRoute, children } = props;
  const [expanded, setExpanded] = useState(defaultExpanded || false);

  const WrapperComponent = defaultExpanded ? Box : StyledLink;

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  return (
    <Box>
      <Box display="flex" mt="500" mb="300">
        <Box flex="1">
          <WrapperComponent to={!defaultExpanded ? firstRoute : ''}>
            <StyledHeader
              width="200px"
              display="flex"
              justifyContent="space-between"
              onClick={toggleExpanded}
            >
              <Box fontSize="300" fontWeight="500" color="gray.700">
                {value}
              </Box>
            </StyledHeader>
          </WrapperComponent>
        </Box>
        <Box flex="0" pr="100" color="gray.500">
          <StyledChevronButton as="button" px="300" onClick={toggleExpanded}>
            <StyledChevronRight expanded={expanded} />
          </StyledChevronButton>
        </Box>
      </Box>
      {expanded && <Box pl="300">{children}</Box>}
    </Box>
  );
}

export default ExpandableMenuItem;
