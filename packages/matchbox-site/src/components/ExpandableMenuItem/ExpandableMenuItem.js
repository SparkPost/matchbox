import React, { useState } from 'react';
import styled from 'styled-components';

import { ArrowForward, ArrowDownward } from '@sparkpost/matchbox-icons';
import { Box } from '@sparkpost/matchbox';
import { navigate } from 'gatsby';

const StyledHeader = styled(Box)`
  cursor: pointer;
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
          {expanded && <ArrowDownward />}
          {!expanded && <ArrowForward />}
        </Box>
      </StyledHeader>
      {expanded && <Box pl="300">{children}</Box>}
    </div>
  );
}

export default ExpandableMenuItem;
