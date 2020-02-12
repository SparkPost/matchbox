import React from 'react';
import PropTypes from 'prop-types';
import { deprecate } from '../../helpers/propTypes';
import styled from 'styled-components';
import { margin, compose } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { Box } from '../Box';

import { outerBase, innerBase, visualSize, calculatedWidth } from './styles.js';

const system = compose(margin);

export const StyledProgressBarOuter = styled(Box)`
  ${outerBase}
  ${visualSize}
  ${system}
`;

export const StyledProgressBarInner = styled(Box)`
  ${innerBase}
  ${visualSize}
  ${calculatedWidth}
`;

function ProgressBar(props) {
  const { completed = 0, size, ...rest } = props;

  return (
    <StyledProgressBarOuter as="div" visualSize={size} {...rest}>
      <StyledProgressBarInner as="div" completed={completed} visualSize={size} />
    </StyledProgressBarOuter>
  );
}

ProgressBar.displayName = 'ProgressBar';

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
  color: deprecate(
    PropTypes.oneOf(['orange', 'blue', 'navy', 'purple', 'red']),
    'Color is always blue for now. This may be updated in the future.',
  ),
  size: PropTypes.oneOf(['normal', 'small']),
  ...createPropTypes(margin.propNames),
};

ProgressBar.defaultProps = {
  size: 'normal',
};

export default ProgressBar;
