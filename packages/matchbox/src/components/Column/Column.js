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

  return (
    <StyledColumn
      width={!width || collapsed ? '100%' : width === 'content' ? 'auto' : width}
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
