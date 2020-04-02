import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { grid } from './styles';

import Column from './Column';

const StyledGrid = styled('div')`
  ${grid}
`;

function Grid({ children, ...props }) {
  return <StyledGrid {...props}>{children}</StyledGrid>;
}

Grid.displayName = 'Grid';
Grid.Column = Column;

Grid.propTypes = {
  center: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  start: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  end: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  top: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  middle: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  bottom: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  around: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  between: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  children: PropTypes.node,
};

export default Grid;
