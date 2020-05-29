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
  const { children } = props;

  const spaceContext = React.useContext(ColumnsContext);

  console.log(spaceContext);

  return (
    <StyledColumn gutter={spaceContext} ref={ref}>
      {children}
    </StyledColumn>
  );
});

Column.displayName = 'Column';

Column.propTypes = {
  children: PropTypes.node,
};

export default Column;
