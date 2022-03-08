import React from 'react';
import styled from 'styled-components';
import { UnstyledLink } from '../UnstyledLink';
import { Box } from '../Box';
import type * as Types from '../../helpers/types';
import { get, getTheme } from '../../helpers/theme';

const StyledWrapper = styled(Box)``;

const StyledConnector = styled.div<{ $completed?: boolean; $disabled?: boolean }>`
  position: relative;
  ${StyledWrapper}:first-child & {
    display: none;
  }
`;

const StyledLink = styled(UnstyledLink)<{
  $selected?: boolean;
  $completed?: boolean;
  disabled?: boolean;
}>`
  text-decoration: none;

  font-weight: ${({ $selected }) =>
    $selected ? getTheme('fontWeights.semibold') : getTheme('fontWeights.normal')};

  &,
  &:visited {
    color: ${({ $selected, $completed }) =>
      $selected || $completed ? getTheme('colors.gray.900') : getTheme('colors.gray.700')};
  }

  &:hover {
    color: ${getTheme('colors.blue.700')};
  }

  ${({ disabled }) => {
    if (disabled) {
      return `
        cursor: not-allowed;
        &:hover {
          color: inherit;
        }
      `;
    }
  }}
`;

const StyledCircle = styled.div<{
  $selected?: boolean;
  $completed?: boolean;
  $disabled?: boolean;
}>`
  border-radius: ${getTheme('radii.circle')};
  border: 2px solid transparent;
  width: ${getTheme('sizes.450')};
  height: ${getTheme('sizes.450')};

  ${({ $completed, $selected, $disabled, theme }) => {
    let color = get(theme, 'colors.gray.700');
    let bg = 'transparent;';

    if ($completed) {
      bg = get(theme, 'colors.blue.700');
    }

    if ($selected || $completed) {
      color = get(theme, 'colors.blue.700');
    }

    if ($disabled) {
      color = get(theme, 'colors.gray.600');
      if ($completed) {
        bg = get(theme, 'colors.gray.600');
      }
    }

    return `
      background: ${bg};
      border-color: ${color};
    `;
  }}
`;

const StyledInnerCircle = styled.div<{ $disabled?: boolean }>`
  position: absolute;
  bottom: ${getTheme('sizes.100')};
  left: ${getTheme('sizes.100')};
  border-radius: ${getTheme('radii.circle')};
  background: ${({ $disabled }) =>
    $disabled ? getTheme('colors.gray.700') : getTheme('colors.blue.700')};
  width: ${getTheme('sizes.300')};
  height: ${getTheme('sizes.300')};
`;

type StepIndicatorProps = {
  disabled?: boolean;
  selected?: boolean;
  completed?: boolean;
};

export type ProgressStepProps = Types.LinkActionProps & {
  /**
   * Whether this step is the current active step or not
   */
  selected?: boolean;
  /**
   * Whether this step is completed or not
   */
  completed?: boolean;
  'data-id'?: string;
  id?: string;
};

export type PolymorphicProgressStep = Types.ForwardRefComponent<'a', ProgressStepProps>;

function Indicator(props: StepIndicatorProps): JSX.Element {
  const { disabled, selected, completed } = props;

  const connectorColor = React.useMemo(() => {
    if (disabled) {
      return 'gray.600';
    }

    if (completed || selected) {
      return 'blue.700';
    }

    return 'gray.700';
  }, []);

  return (
    <Box position="relative">
      <StyledConnector $disabled={disabled}>
        <Box position="relative" left="9px" width="2px" height="550" bg={connectorColor} />
      </StyledConnector>
      <StyledCircle $completed={completed} $selected={selected} $disabled={disabled} />
      {selected && <StyledInnerCircle $disabled={disabled} />}
    </Box>
  );
}

const Step = React.forwardRef(function Step(props, userRef) {
  const { children, selected, completed, disabled, ...rest } = props;

  return (
    <StyledWrapper display="grid" gridTemplateColumns="auto 1fr" gridGap="300">
      <Indicator completed={completed} selected={selected} disabled={disabled} />
      <Box height="450" alignSelf="end">
        <StyledLink
          $selected={selected}
          $completed={completed}
          disabled={disabled}
          {...rest}
          ref={userRef}
        >
          {children}
        </StyledLink>
      </Box>
    </StyledWrapper>
  );
}) as PolymorphicProgressStep;

Step.displayName = 'Progress.Step';

export default Step;
