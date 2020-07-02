import React from 'react';
import Heading from '../Heading';
import TokenUsage from './TokenUsage';
import { Box, Select } from '@sparkpost/matchbox';
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

  // Sorts by category, then friendly name
  const sortedTokens = React.useMemo(() => {
    return props.tokens.sort((a, b) => {
      if (a.category > b.category) return 1;
      if (a.category < b.category) return -1;
      if (a.friendly > b.friendly) return 1;
      if (a.friendly < b.friendly) return -1;

      return 0;
    });
  }, [props.tokens]);

  const filteredTokens = React.useMemo(() => {
    if (!props.filter) {
      return sortedTokens;
    }

    const filterTerm = props.filter.toLowerCase();
    return sortedTokens.filter(
      ({ category, friendly = '', value, name, javascript = '' }) => {
        if (
          category.includes(filterTerm) ||
          friendly.toLowerCase().includes(filterTerm) ||
          value.includes(filterTerm) ||
          name.includes(filterTerm) ||
          javascript.toLowerCase().includes(filterTerm)
        ) {
          return true;
        }
        return false;
      }
    );
  }, [props.tokens, props.filter, sortedTokens]);

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
          <Select
            onChange={handleTypeSelect}
            value={usageType}
            options={[
              { value: 'javascript', label: 'Javascript' },
              { value: 'scss', label: 'Scss' },
              { value: 'css', label: 'CSS' }
            ]}
          ></Select>
        </div>
      </Box>
      <StyledTable>
        <tbody>{filteredTokens.map(renderTokenRow)}</tbody>
      </StyledTable>
    </div>
  );
}

export default TokenTable;
