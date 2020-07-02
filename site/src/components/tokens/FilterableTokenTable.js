import React from 'react';
import TokenTable from './TokenTable';
import { Box, TextField } from '@sparkpost/matchbox';
import { Search } from '@sparkpost/matchbox-icons';

function FilterableTokenTable(props) {
  const { tokens, columns, title } = props;
  const [inputVal, setInputVal] = React.useState('');

  return (
    <>
      <Box mb="700">
        <TextField
          prefix={<Search size={21} />}
          placeholder="Search for a token"
          value={inputVal}
          onChange={e => setInputVal(e.currentTarget.value)}
        />
      </Box>
      <TokenTable
        title={title}
        columns={columns}
        tokens={tokens}
        filter={inputVal}
      />
    </>
  );
}

export default FilterableTokenTable;
