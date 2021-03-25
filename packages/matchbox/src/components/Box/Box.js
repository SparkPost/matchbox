import styled from 'styled-components';
import {
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
} from 'styled-system';
import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import { clean } from '../../helpers/props';

const system = compose(border, color, flexbox, grid, layout, position, shadow, space, typography);

const truncate = props => {
  if (props.truncate) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    };
  }
};

const Box = styled.div.withConfig(clean(system.propNames))`
  ${system}
  ${truncate}
`;

Box.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.shadow,
  ...propTypes.space,
  ...propTypes.typography,
  truncate: PropTypes.bool,
};

Box.displayName = 'Box';
export default Box;
