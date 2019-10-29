import styled from 'styled-components';
import { border, color, flexbox, grid, layout, position, shadow, space, typography, compose } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const system = compose(
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography
);

const truncate = (props) => {
  if (props.truncate) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    };
  }
};

const Box = styled('div')`
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
  ...propTypes.typography
};

export default Box;
