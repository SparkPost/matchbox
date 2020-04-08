import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { pick } from '../../helpers/propTypes';
import { breakpoints, gridStyle } from './styles';

import Column from './Column';

const StyledGrid = styled('div')`
  ${gridStyle}
`;

function Grid(props) {
  const { children, ...rest } = pick(props, Grid.propTypes);
  return <StyledGrid {...rest}>{children}</StyledGrid>;
}

Grid.displayName = 'Grid';
Grid.Column = Column;

Grid.propTypes = {
  start: PropTypes.oneOf(breakpoints),
  center: PropTypes.oneOf(breakpoints),
  end: PropTypes.oneOf(breakpoints),
  top: PropTypes.oneOf(breakpoints),
  middle: PropTypes.oneOf(breakpoints),
  bottom: PropTypes.oneOf(breakpoints),
  around: PropTypes.oneOf(breakpoints),
  between: PropTypes.oneOf(breakpoints),
  children: PropTypes.node,
};

export default Grid;
