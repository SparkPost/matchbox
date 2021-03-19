import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cell, row, headerCell, totalsRow, verticalAlignment } from './styles';
import { TablePaddingContext } from './context';
import { padding, fontSize, compose } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';

const paddingAndFontSize = compose(padding, fontSize);
const StyledCell = styled('td')`
  ${cell}
  ${paddingAndFontSize}
`;

const StyledHeaderCell = styled('th')`
  ${headerCell}
  ${padding}
`;

const StyledRow = styled('tr')`
  ${row}
  td, th {
    ${verticalAlignment}
  }
`;

const StyledTotalsRow = styled('tr')`
  ${totalsRow}
`;

const Cell = React.forwardRef(function Cell(
  { value, children, className, colSpan, style, width },
  userRef,
) {
  const paddingContext = React.useContext(TablePaddingContext);

  return (
    <StyledCell
      {...paddingContext}
      className={className}
      fontSize={['200', null, '300']}
      colSpan={colSpan}
      ref={userRef}
      style={style}
      width={width}
    >
      {value || children}
    </StyledCell>
  );
});

Cell.propTypes = {
  value: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  colSpan: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.string,
  ...createPropTypes(padding.propNames),
};
Cell.displayName = 'Table.Cell';

const HeaderCell = React.forwardRef(function HeaderCell(
  { value, children, className, colSpan, style, width },
  userRef,
) {
  return (
    <StyledHeaderCell
      p="450"
      className={className}
      colSpan={colSpan}
      ref={userRef}
      style={style}
      width={width}
    >
      {value || children}
    </StyledHeaderCell>
  );
});

HeaderCell.propTypes = {
  value: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  colSpan: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.string,
};
HeaderCell.displayName = 'Table.HeaderCell';

const Row = React.forwardRef(function Row(
  { alignY, rowData, children, className, onClick },
  userRef,
) {
  return (
    <StyledRow alignY={alignY} className={className} onClick={onClick} ref={userRef}>
      {rowData ? rowData.map((value, i) => <Cell value={value} key={`Cell-${i}`} />) : children}
    </StyledRow>
  );
});

Row.propTypes = {
  alignY: PropTypes.oneOf(['top', 'bottom', 'center']),
  rowData: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
Row.defaultProps = {
  alignY: 'center',
};
Row.displayName = 'Table.Row';

const TotalsRow = React.forwardRef(function TotalsRow(
  { rowData, children, className, onClick },
  userRef,
) {
  return (
    <StyledTotalsRow className={className} ref={userRef} tabIndex="-1" onClick={onClick}>
      {rowData ? rowData.map((value, i) => <Cell value={value} key={`Cell-${i}`} />) : children}
    </StyledTotalsRow>
  );
});

TotalsRow.propTypes = {
  rowData: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
TotalsRow.displayName = 'Table.TotalsRow';

export { Cell, HeaderCell, Row, TotalsRow };
