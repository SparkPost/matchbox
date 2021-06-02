import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin, padding } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { Box } from '../Box';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { pick } from '../../helpers/props';
import { Cell, HeaderCell, Row, TotalsRow } from './TableElements';
import SortButton from './SortButton';
import { TablePaddingContext } from './context';
import { table, wrapper } from './styles';

const StyledTable = styled('table')`
  ${table}
  ${padding}
`;

const Wrapper = styled(Box)`
  ${wrapper}
  ${margin}
`;

const DuplicatedTable = styled(Box)`
  pointer-events: none;
  z-index: ${({ theme }) => theme.zIndices.default};

  th:not(:first-child),
  td:not(:first-child) {
    visibility: hidden;
    pointer-events: none;
    border-color: transparent !important;
  }
  tr {
    background: none !important;
  }
  th:first-child,
  td:first-child {
    background: ${({ theme }) => theme.colors.white};
    pointer-events: auto;
    ${({ isScrolled, theme }) => (isScrolled ? `box-shadow: ${theme.shadows[200]};` : '')};
    transition: ${({ theme }) =>
      `box-shadow ${theme.motion.duration.medium} ${theme.motion.ease.inOut}`};
  }
`;

function Table(props) {
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

  const { px = '450', py = '400', ...paddingProps } = pick(rest, padding.propNames);
  const marginProps = pick(rest, margin.propNames);

  return (
    <Box position="relative">
      <TablePaddingContext.Provider value={{ px, py, ...paddingProps }}>
        {freezeFirstColumn && (
          <DuplicatedTable
            data-id="matchbox-sticky-table"
            position="absolute"
            top="0"
            left="0"
            right="0"
            overflow="clip visible"
            isScrolled={isScrolled}
          >
            <StyledTable>{dataMarkup}</StyledTable>
          </DuplicatedTable>
        )}
        <Wrapper
          data-id="matchbox-scroll-wrapper"
          freezeFirstColumn={freezeFirstColumn}
          onScroll={freezeFirstColumn ? handleScroll : null}
          {...marginProps}
        >
          <StyledTable
            aria-readonly={readOnly}
            data-id={dataId}
            freezeFirstColumn={freezeFirstColumn}
            id={id}
            isScrolled={isScrolled}
            role={role}
          >
            {title && (
              <caption>
                <ScreenReaderOnly>{title}</ScreenReaderOnly>
              </caption>
            )}
            {dataMarkup}
          </StyledTable>
        </Wrapper>
      </TablePaddingContext.Provider>
    </Box>
  );
}

Table.Cell = Cell;
Table.HeaderCell = HeaderCell;
Table.Row = Row;
Table.TotalsRow = TotalsRow;
Table.SortButton = SortButton;

Table.displayName = 'Table';
Table.propTypes = {
  'aria-readonly': PropTypes.string,
  children: PropTypes.node,
  data: PropTypes.array,
  'data-id': PropTypes.string,
  freezeFirstColumn: PropTypes.bool,
  id: PropTypes.string,
  role: PropTypes.string,
  title: PropTypes.string,
  ...createPropTypes(margin.propNames),
  ...createPropTypes(padding.propNames),
};

export default Table;
