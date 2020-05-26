import React from 'react';
import PropTypes from 'prop-types';
import { Cell, HeaderCell, Row } from './TableElements';
import styled from 'styled-components';
import { margin, padding, compose } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { table } from './styles';
import { pick } from '@styled-system/props';
import { TablePaddingContext } from './context';

const system = compose(margin, padding);

const StyledTable = styled('table')`
  ${table}
  ${system}
`;

function Table(props) {
  const { children, data, ...rest } = props;

  const dataMarkup = data ? (
    <tbody>
      {data.map((rowData, i) => (
        <Row rowData={rowData} key={`Row-${i}`} />
      ))}
    </tbody>
  ) : (
    children
  );

  // Pick out `p` and `padding` so we only pass one value down
  // `context` is passed to handle directional padding values like `px` or `pr`
  const { p: contextP = '500', padding: contextPadding, ...context } = pick(rest);

  return (
    <StyledTable {...rest}>
      <TablePaddingContext.Provider value={{ p: contextP || contextPadding, ...context }}>
        {dataMarkup}
      </TablePaddingContext.Provider>
    </StyledTable>
  );
}

Table.Cell = Cell;
Table.HeaderCell = HeaderCell;
Table.Row = Row;

Table.displayName = 'Table';
Table.propTypes = {
  data: PropTypes.array,
  /**
   * React node(s)
   */
  children: PropTypes.node,
  ...createPropTypes(margin.propNames),
  ...createPropTypes(padding.propNames),
};

export default Table;
