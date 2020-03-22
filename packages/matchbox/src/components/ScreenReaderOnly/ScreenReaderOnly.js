import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { visuallyHidden } from '../../styles/helpers';

const StyledScreenReaderOnly = styled('span')`
  ${visuallyHidden}
`;

const ScreenReaderOnly = ({ children }) => (
  <StyledScreenReaderOnly>{children}</StyledScreenReaderOnly>
);

ScreenReaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScreenReaderOnly;
