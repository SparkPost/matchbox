import React from 'react';
import styled from 'styled-components';
import { connectSearchBox } from 'react-instantsearch-dom';
import { TextField } from '@sparkpost/matchbox';
import { Search } from '@sparkpost/matchbox-icons';

const Icon = styled(Search)`
  margin-top: -1px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export default connectSearchBox(({ refine, currentRefinement, onFocus }) => (
  <form>
    <TextField
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      value={currentRefinement}
      onFocus={onFocus}
      suffix={<Icon />}
    />
  </form>
));
