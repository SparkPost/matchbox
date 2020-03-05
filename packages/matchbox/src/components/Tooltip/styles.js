import { tokens } from '@sparkpost/design-tokens';

export const visibility = props => `
  pointer-events: none;
  opacity: ${props.visible ? '1' : '0'};
  visibility: ${props.visible ? 'visible' : 'hidden'};
  transform: scale(${props.visible ? '1' : '0.96'});
  transition:  ${tokens.motionDuration_fast} ${
  props.visible ? tokens.motionEase_out : tokens.motionEase_in
};
`;
