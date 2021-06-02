import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cell, row, headerCell, totalsRow, verticalAlignment, horizontalAlignment } from './styles';
import { TablePaddingContext } from './context';
import { padding, fontSize, width, compose } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '../../helpers/props';

const cellSystem = compose(padding, fontSize, width);
const StyledCell = styled('td')`
  ${cell}
  ${cellSystem}
  ${horizontalAlignment}
`;

const headerSystem = compose(padding, width);
const StyledHeaderCell = styled('th')`
  ${headerCell}
  ${headerSystem}
  ${horizontalAlignment}
`;

const StyledRow = styled('tr')`
  ${row}
  thead & th {
    vertical-align: bottom;
  }
  td {
    ${verticalAlignment}
  }
`;

const StyledTotalsRow = styled('tr')`
  ${totalsRow}
`;

const Cell = React.forwardRef(function Cell(
  { align, value, children, className, colSpan, role, rowSpan, style, width, ...rest },
  userRef,
) {
  const paddingContext = React.useContext(TablePaddingContext);
  const paddingProps = pick(rest, padding.propNames);
  return (
    <StyledCell
      {...paddingContext}
      {...paddingProps}
      align={align}
      className={className}
      fontSize={['200', null, '300']}
      colSpan={colSpan}
      ref={userRef}
      role={role}
      rowSpan={rowSpan}
      style={style}
      width={width}
    >
      {value || children}
    </StyledCell>
  );
});

Cell.propTypes = {
  align: PropTypes.oneOf(['right', 'center', 'left', undefined]),
  value: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  colSpan: PropTypes.string,
  role: PropTypes.string,
  rowSpan: PropTypes.string,
  style: PropTypes.object,
  ...createPropTypes(padding.propNames),
  ...createPropTypes(width.propNames),
};
Cell.displayName = 'Table.Cell';

const HeaderCell = React.forwardRef(function HeaderCell(
  {
    align,
    'aria-sort': ariaSort,
    value,
    children,
    className,
    colSpan,
    role,
    rowSpan,
    scope,
    style,
    width,
  },
  userRef,
) {
  return (
    <StyledHeaderCell
      p="450"
      align={align}
      aria-sort={ariaSort}
      className={className}
      colSpan={colSpan}
      ref={userRef}
      role={role}
      rowSpan={rowSpan}
      scope={scope}
      style={style}
      width={width}
    >
      {value || children}
    </StyledHeaderCell>
  );
});

HeaderCell.propTypes = {
  'aria-sort': PropTypes.string,
  align: PropTypes.oneOf(['right', 'center', 'left', undefined]),
  value: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  colSpan: PropTypes.string,
  role: PropTypes.string,
  rowSpan: PropTypes.string,
  scope: PropTypes.string,
  style: PropTypes.object,
  ...createPropTypes(width.propNames),
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
