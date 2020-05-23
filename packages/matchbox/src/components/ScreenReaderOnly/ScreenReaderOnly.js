import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { visuallyHidden } from '../../styles/helpers';

const StyledScreenReaderOnly = styled('span')`
  ${visuallyHidden}
`;

const ScreenReaderOnly = ({ children, as, id }) => (
  <StyledScreenReaderOnly id={id} as={as}>
    {children}
  </StyledScreenReaderOnly>
);

ScreenReaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.elementType.isRequired,
  id: PropTypes.string,
};

ScreenReaderOnly.defaultProps = {
  as: 'span',
};

ScreenReaderOnly.displayName = 'ScreenReaderOnly';
export default ScreenReaderOnly;
