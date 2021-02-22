import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { margin, compose } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { deprecate } from '../../helpers/propTypes';
import { pick } from '../../helpers/props';
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

const ProgressBar = React.forwardRef(function ProgressBar(props, userRef) {
  const { completed = 0, label, size, valueText, ...rest } = props;
  const systemProps = pick(rest, system.propNames);

  return (
    <StyledProgressBarOuter
      as="div"
      visualSize={size}
      role="progressbar"
      aria-label={label}
      aria-valuenow={`${completed}`}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuetext={valueText}
      {...systemProps}
      data-id={rest['data-id']}
      ref={userRef}
    >
      <StyledProgressBarInner as="div" completed={completed} visualSize={size} />
    </StyledProgressBarOuter>
  );
});

ProgressBar.displayName = 'ProgressBar';

ProgressBar.propTypes = {
  completed: PropTypes.number.isRequired,
  color: deprecate(
    PropTypes.oneOf(['orange', 'blue', 'navy', 'purple', 'red']),
    'Color is always blue for now. This may be updated in the future.',
  ),
  'data-id': PropTypes.string,
  size: PropTypes.oneOf(['normal', 'small']),
  /**
   * Describes what the progressbar represents - content is visually hidden
   */
  label: PropTypes.string,

  /**
   * Used to describe the current status of the progress bar to screen reader only users if completion percentage is inadequete
   */
  valueText: PropTypes.string,
  ...createPropTypes(margin.propNames),
};

ProgressBar.defaultProps = {
  size: 'normal',
};

export default ProgressBar;
