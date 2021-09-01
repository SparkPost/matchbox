import React from 'react';
import styled from 'styled-components';
import { totalsRow } from './styles';
import Cell from './Cell';

const StyledTotalsRow = styled.tr`
  ${totalsRow}
`;

export type TableTotalsRowProps = {
  rowData?: React.ReactNode[];
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLTableRowElement>;
};

const TotalsRow = React.forwardRef<HTMLTableRowElement, TableTotalsRowProps>(function TotalsRow(
  { rowData, children, className, onClick },
  userRef,
) {
  return (
    <StyledTotalsRow className={className} ref={userRef} tabIndex={-1} onClick={onClick}>
      {rowData
        ? rowData.map((value?: React.ReactNode, i?: number) => (
            <Cell value={value} key={`Cell-${i}`} />
          ))
        : children}
    </StyledTotalsRow>
  );
});

TotalsRow.displayName = 'Table.TotalsRow';
export default TotalsRow;
