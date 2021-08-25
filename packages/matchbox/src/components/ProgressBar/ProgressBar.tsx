import React from 'react';
import styled from 'styled-components';
import { margin, MarginProps, compose } from 'styled-system';
import { pick } from '../../helpers/props';
import { Box } from '../Box';

import { outerBase, innerBase, visualSize, calculatedWidth } from './styles';

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

type ProgressBarProps = MarginProps & {
  completed: number;

  /**
   * @deprecated Color is always blue for now. This may be updated in the future.
   */
  color?: 'orange' | 'blue' | 'navy' | 'purple' | 'red';
  'data-id'?: string;
  id?: string;
  size?: 'normal' | 'small';
  /**
   * Describes what the progressbar represents - content is visually hidden
   */
  label?: string;

  /**
   * Used to describe the current status of the progress bar to screen reader only users if completion percentage is inadequete
   */
  valueText?: string;
};

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(function ProgressBar(
  props,
  userRef,
) {
  const {
    completed = 0,
    label,
    size = 'normal',
    valueText,
    id,
    'data-id': dataId,
    ...rest
  } = props;
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
      data-id={dataId}
      id={id}
      ref={userRef}
    >
      <StyledProgressBarInner as="div" completed={completed} visualSize={size} />
    </StyledProgressBarOuter>
  );
}) as React.ForwardRefExoticComponent<ProgressBarProps>;

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
