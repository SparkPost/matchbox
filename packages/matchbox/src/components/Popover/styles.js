import { tokens } from '@sparkpost/design-tokens';

export const content = props => `
  position: absolute;
  background: ${tokens.color_white};
  border: ${props.theme.borders['300']};
  border-radius: ${tokens.borderRadius_100};
  box-shadow: ${tokens.boxShadow_100};
  margin-top: ${props.isTop ? tokens.spacing_0 : tokens.spacing_100};
  margin-bottom: ${props.isTop ? tokens.spacing_100 : tokens.spacing_0};

  top: ${props.isTop ? 'auto' : '100%'};
  bottom: ${!props.isTop ? 'auto' : '100%'};
`;

export const transition = props => {
  const visible = `
    opacity: 1;
    transform: translateY(0);
    transition: opacity ${tokens.motionDuration_medium} ${tokens.motionEase_out},
                transform ${tokens.motionDuration_medium} ${tokens.motionEase_out};
  `;

  const hidden = `
    opacity: 0;
    pointer-events: none;
    transform: translateY(${props.isTop ? tokens.spacing_100 : `-${tokens.spacing_100}`});
    transition: opacity ${tokens.motionDuration_fast} ${tokens.motionEase_in},
                transform ${tokens.motionDuration_fast} ${tokens.motionEase_in};
  `;

  switch (props.state) {
    case 'entered':
      return `
        ${visible}
        pointer-events: auto;
        visibility: visible;
      `;
    case 'exiting':
      return `
        ${hidden}
        visibility: visible;
      `;
    case 'exited':
    case 'entering':
    default:
      return `
        ${hidden}
        visibility: hidden;
      `;
  }
};
