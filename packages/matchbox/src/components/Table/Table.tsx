import React from 'react';
import styled from 'styled-components';
import { margin, MarginProps, padding, PaddingProps } from 'styled-system';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { pick } from '../../helpers/props';
import Cell from './Cell';
import HeaderCell from './HeaderCell';
import Row from './Row';
import TotalsRow from './TotalsRow';
import SortButton from './SortButton';
import { TablePaddingContext } from './context';
import { table, wrapper, sticky } from './styles';

const StyledTable = styled('table')`
  ${table}
  ${padding}
  ${sticky}
`;

const Wrapper = styled(Box)`
  ${wrapper}
  ${margin}
`;

export type TableProps = {
  'aria-readonly'?: string;
  children?: React.ReactNode;
  /**
   * @deprecated Use children instead
   */
  data?: React.ReactNode[][];
  'data-id'?: string;
  freezeFirstColumn?: boolean;
  id?: string;
  role?: string;
  title?: string;
} & MarginProps &
  PaddingProps;

function Table(props: TableProps): JSX.Element {
  const {
    'aria-readonly': readOnly,
    children,
    data,
    'data-id': dataId,
    freezeFirstColumn,
    id,
    role,
    title,
    ...rest
  } = props;
  const [isScrolled, setIsScrolled] = React.useState(false);
  const handleScroll = React.useCallback(
    (e) => {
      setIsScrolled(e.target.scrollLeft > 10);
    },
    [freezeFirstColumn],
  );
  const dataMarkup = data ? (
    <tbody>
      {data.map((rowData, i) => (
        <Row rowData={rowData} key={`Row-${i}`} />
      ))}
    </tbody>
  ) : (
    children
  );
  const { px = '450', py = '400', ...paddingProps } = pick(rest, padding.propNames);
  const marginProps = pick(rest, margin.propNames);

  return (
    <Wrapper
      $freezeFirstColumn={freezeFirstColumn}
      onScroll={freezeFirstColumn ? handleScroll : null}
      {...marginProps}
    >
      <StyledTable
        aria-readonly={readOnly}
        data-id={dataId}
        $freezeFirstColumn={freezeFirstColumn}
        id={id}
        isScrolled={isScrolled}
        role={role}
      >
        <TablePaddingContext.Provider value={{ px, py, ...paddingProps }}>
          {title && (
            <caption>
              <ScreenReaderOnly>{title}</ScreenReaderOnly>
            </caption>
          )}
          {dataMarkup}
        </TablePaddingContext.Provider>
      </StyledTable>
    </Wrapper>
  );
}

Table.Cell = Cell;
Table.HeaderCell = HeaderCell;
Table.Row = Row;
Table.TotalsRow = TotalsRow;
Table.SortButton = SortButton;
Table.displayName = 'Table';
export default Table;
