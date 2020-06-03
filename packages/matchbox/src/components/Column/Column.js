import React from 'react';
import PropTypes from 'prop-types';
import { ColumnsContext } from '../Columns/context';
import styled from 'styled-components';
import { Box } from '../Box';
import { gutter } from './styles';

const StyledColumn = styled(Box)`
  ${gutter}
`;

const Column = React.forwardRef(function Column(props, ref) {
  const { width, children } = props;
  const { space, collapsed } = React.useContext(ColumnsContext);

  let columnWidth = width;

  if (collapsed) {
    columnWidth = '100%';
  }

  if (width === 'content') {
    columnWidth = 'auto';
  }

  return (
    <StyledColumn
      width={columnWidth}
      flex={!width && !collapsed ? '1' : ''}
      gutter={space}
      ref={ref}
    >
      {children}
    </StyledColumn>
  );
});

Column.displayName = 'Column';

Column.propTypes = {
  children: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.oneOf(['content']), PropTypes.number]),
};

export default Column;
