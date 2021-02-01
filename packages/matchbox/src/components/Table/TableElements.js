import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cell, row, headerCell, totalsRow, verticalAlignment } from './styles';
import { TablePaddingContext } from './context';
import { padding, fontSize, compose } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '../../helpers/props';

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
  ${padding}
  td, th {
    ${verticalAlignment}
  }
`;

const StyledTotalsRow = styled('tr')`
  ${totalsRow}
  ${padding}
`;

const Cell = ({ value, children, className, ...rest }) => {
  const paddingContext = React.useContext(TablePaddingContext);

  return (
    <StyledCell {...paddingContext} className={className} fontSize={['200', null, '300']} {...rest}>
      {value || children}
    </StyledCell>
  );
};

Cell.propTypes = {
  value: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
  ...createPropTypes(padding.propNames),
};
Cell.displayName = 'Table.Cell';

const HeaderCell = ({ value, children, className, ...rest }) => {
  return (
    <StyledHeaderCell p="450" className={className} {...rest}>
      {value || children}
    </StyledHeaderCell>
  );
};

HeaderCell.propTypes = {
  value: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node,
};
HeaderCell.displayName = 'Table.HeaderCell';

const Row = ({ alignY, rowData, children, className, ...rest }) => {
  return (
    <StyledRow alignY={alignY} className={className} {...rest}>
      {rowData ? rowData.map((value, i) => <Cell value={value} key={`Cell-${i}`} />) : children}
    </StyledRow>
  );
};

Row.propTypes = {
  alignY: PropTypes.oneOf(['top', 'bottom', 'center']),
  rowData: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node,
};
Row.defaultProps = {
  alignY: 'center',
};
Row.displayName = 'Table.Row';

const TotalsRow = React.forwardRef(function TotalsRow(
  { rowData, children, className, ...rest },
  ref,
) {
  const paddingProps = pick(rest, padding.propNames);
  return (
    <StyledTotalsRow className={className} {...paddingProps} ref={ref} tabIndex="-1">
      {rowData ? rowData.map((value, i) => <Cell value={value} key={`Cell-${i}`} />) : children}
    </StyledTotalsRow>
  );
});

TotalsRow.propTypes = {
  rowData: PropTypes.array,
  className: PropTypes.string,
  children: PropTypes.node,
};
TotalsRow.displayName = 'Table.TotalsRow';

export { Cell, HeaderCell, Row, TotalsRow };
