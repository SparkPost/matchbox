import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin, padding } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { pick } from '../../helpers/props';
import { Cell, HeaderCell, Row, TotalsRow } from './TableElements';
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

function Table(props) {
  const { children, data, freezeFirstColumn, title, ...rest } = props;
  const [isScrolled, setIsScrolled] = React.useState(false);

  const handleScroll = React.useCallback(
    e => {
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

  const { px = '500', py = '400', ...paddingProps } = pick(rest, padding.propNames);
  const marginProps = pick(rest, margin.propNames);

  return (
    <Wrapper
      freezeFirstColumn={freezeFirstColumn}
      onScroll={freezeFirstColumn ? handleScroll : null}
      {...marginProps}
    >
      <StyledTable freezeFirstColumn={freezeFirstColumn} isScrolled={isScrolled} {...rest}>
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

Table.displayName = 'Table';
Table.propTypes = {
  freezeFirstColumn: PropTypes.bool,
  data: PropTypes.array,
  /**
   * React node(s)
   */
  children: PropTypes.node,
  title: PropTypes.string,
  ...createPropTypes(margin.propNames),
  ...createPropTypes(padding.propNames),
};

export default Table;
