import React from 'react';
import PropTypes from 'prop-types';
import { display } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { ColumnsContext } from '../Columns/context';
import styled from 'styled-components';
import { Box } from '../Box';
import { gutter } from './styles';

const StyledColumn = styled(Box)`
  ${display}
  ${gutter}

  &:first-child {
    padding-top: 0;
  }
`;

const Column = React.forwardRef(function Column(props, ref) {
  const { width, children, className, display } = props;
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
      display={display}
      data-id={props['data-id']}
      className={className}
      width={columnWidth}
      flex={!width && !collapsed ? '1' : ''}
      pt={collapsed ? space : null}
      gutter={space}
      ref={ref}
      tabIndex="-1"
    >
      {children}
    </StyledColumn>
  );
});

Column.displayName = 'Column';

Column.propTypes = {
  children: PropTypes.node,
  'data-id': PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.oneOf(['content']), PropTypes.number]),
  className: PropTypes.string,
  ...createPropTypes(display.propNames),
};

export default Column;
