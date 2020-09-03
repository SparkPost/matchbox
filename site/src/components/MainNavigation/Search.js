import React from 'react';
import styled from 'styled-components';
import { connectSearchBox } from 'react-instantsearch-dom';
import { TextField, Box, useWindowEvent } from '@sparkpost/matchbox';
import { Search } from '@sparkpost/matchbox-icons';

const Icon = styled(Search)`
  margin-top: -1px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export default connectSearchBox(
  ({ refine, currentRefinement, onFocus, hasFocus }) => {
    useWindowEvent('keydown', function(e) {
      if (hasFocus && e.key === 'Escape') {
        refine('');
      }
    });

    return (
      <Box as="form" width="180px" role="search">
        <TextField
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={e => refine(e.target.value)}
          value={currentRefinement}
          onFocus={onFocus}
          suffix={<Icon />}
        />
      </Box>
    );
  }
);
