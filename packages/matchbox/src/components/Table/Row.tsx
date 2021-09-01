import React from 'react';
import styled from 'styled-components';
import { row, verticalAlignment } from './styles';
import { ResponsiveValue } from 'styled-system';
import { AlignY } from '../../helpers/types';
import Cell from './Cell';

type AlignYProp = ResponsiveValue<AlignY>;

const StyledRow = styled.tr<{ $alignY?: AlignYProp }>`
  ${row}
  thead & th {
    vertical-align: bottom;
  }
  td {
    ${verticalAlignment}
  }
`;

export type TableRowProps = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLTableRowElement>;
  alignY?: AlignYProp;
  /**
   * @deprecated
   */
  rowData?: React.ReactNode[];
  children?: React.ReactNode;
};

const Row = React.forwardRef<HTMLTableRowElement, TableRowProps>(function Row(
  { alignY = 'center', rowData, children, className, onClick },
  userRef,
) {
  return (
    <StyledRow $alignY={alignY} className={className} onClick={onClick} ref={userRef}>
      {rowData
        ? rowData.map((value?: React.ReactNode, i?: number) => (
            <Cell value={value} key={`Cell-${i}`} />
          ))
        : children}
    </StyledRow>
  );
});

Row.displayName = 'Table.Row';
export default Row;
