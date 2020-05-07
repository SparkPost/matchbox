import React from 'react';
import Heading from '../Heading';
import TokenUsage from './TokenUsage';
import { Box } from '@sparkpost/matchbox';
import styled from 'styled-components';
import { tokenTable, tableCell } from './TokenTableStyle';

const StyledTableCell = styled('td')`
  ${tableCell}
`;

const StyledTable = styled('table')`
  ${tokenTable}
`;

function TokenTable(props) {
  const [usageType, setType] = React.useState('javascript');

  function handleTypeSelect(e) {
    setType(e.target.value);
  }

  function renderTokenRow(token, i) {
    const cells = props.columns.map(type => {
      let cell = token[type];

      if (type === 'usage') {
        cell = <TokenUsage usage={token[usageType] || token.value} />;
      }

      return (
        <StyledTableCell type={type} key={type}>
          {cell}
        </StyledTableCell>
      );
    });

    return <tr key={`${token.name}-${i}`}>{cells}</tr>;
  }

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="500"
      >
        <Heading m="0" as="h4">
          {props.title || 'Tokens'}
        </Heading>
        <div>
          <select onChange={handleTypeSelect} value={usageType}>
            <option value="javascript">Javascript</option>
            <option value="scss">Scss</option>
            <option value="css">CSS</option>
          </select>
        </div>
      </Box>
      <StyledTable>
        <tbody>{props.tokens.map(renderTokenRow)}</tbody>
      </StyledTable>
    </div>
  );
}

export default TokenTable;
