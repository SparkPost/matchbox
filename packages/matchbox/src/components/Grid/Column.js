import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { gridColumnStyle } from './styles';

const StyledGridColumn = styled('div')`
  ${gridColumnStyle}
`;

function Column({ children, ...props }) {
  return <StyledGridColumn {...props}>{children}</StyledGridColumn>;
}

Column.displayName = 'Grid.Column';
Column.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  children: PropTypes.node,
};

export default Column;
