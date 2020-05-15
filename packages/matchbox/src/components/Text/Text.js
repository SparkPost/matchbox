import styled from 'styled-components';
import { color, space, typography, compose } from 'styled-system';
import { truncate, looksLike } from './styles';
import PropTypes from 'prop-types';

const system = compose(color, space, typography);

const Text = styled('p')`
  ${system}
  ${truncate}
  ${looksLike}
`;

Text.propTypes = {
  as: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
  looksLike: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']),
};

Text.defaultProps = {
  as: 'p',
};

Text.displayName = 'Text';
export default Text;
