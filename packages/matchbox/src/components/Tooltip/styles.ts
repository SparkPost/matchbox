import { tokens } from '@sparkpost/design-tokens';

export const visibility = (props): string => {
  const { $visible, $state } = props;
  return `
      pointer-events: none;
      opacity: ${$visible && $state === 'entered' ? '1' : '0'};
      visibility: ${$visible && $state === 'entered' ? 'visible' : 'hidden'};
      transform: scale(${$visible && $state === 'entered' ? '1' : '0.96'});
      transition:  ${tokens.motionDuration_fast} ${
    $visible && $state === 'entered' ? tokens.motionEase_out : tokens.motionEase_in
  };`;
};
