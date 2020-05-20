import React from 'react';
import styled from 'styled-components';
import { color, space, typography, compose } from 'styled-system';
import { truncate, lookslike } from './styles';
import PropTypes from 'prop-types';

const system = compose(color, space, typography);

const StyledText = styled('p')`
  ${system}
  ${truncate}
  ${lookslike}
`;

const Text = function(props) {
  const { as, lookslike, children, ...rest } = props;

  return (
    <StyledText as={as} lookslike={lookslike} {...rest}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  as: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
  lookslike: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
};

Text.defaultProps = {
  as: 'p',
};

Text.displayName = 'Text';
export default Text;
