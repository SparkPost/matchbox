import React from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { ColumnsContext } from './context';
import { Box } from '../Box';

const Columns = React.forwardRef(function Columns(props, ref) {
  const { children, space, ...rest } = props;

  return (
    <Box display="flex" ref={ref} {...rest}>
      <ColumnsContext.Provider value={space}>{children}</ColumnsContext.Provider>
    </Box>
  );
});

Columns.displayName = 'Columns';

Columns.propTypes = {
  children: PropTypes.node,
  space: propTypes.space.margin,
};

export default Columns;
