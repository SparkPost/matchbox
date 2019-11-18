import styled from 'styled-components';
import { color, space, typography, compose } from 'styled-system';
import { truncate, crop } from './styles';
import PropTypes from 'prop-types';

const system = compose(
  color,
  space,
  typography
);

const Text = styled('p')`
  ${system}
  ${truncate}
  ${crop}
`;

Text.propTypes = {
  as: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
  crop: PropTypes.bool
};

Text.defaultProps = {
  as: 'p'
};

Text.displayName = 'Text';
export default Text;
