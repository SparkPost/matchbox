import { tokens } from '@sparkpost/design-tokens';

export const base = props => {
  const overlayHex = `${tokens.color_gray_1000}70`;

  return `
    position: fixed;
    z-index: ${tokens.zIndex_overlay};
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: ${tokens.spacing_700} 0;
    min-height: 100%;
    max-height: 100vh;
    pointer-events: ${props.open ? 'auto' : 'none'};
    overflow-y: auto;
    will-change: opacity;
    background-color: ${props.open ? overlayHex : 'transparent'};
    transition: background-color ${tokens.motionDuration_fast} ${tokens.motionEase_in};
  `;
};

export const wrapper = () => `
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const focusLock = props => `
  width: 100%;
  max-width: ${props.maxWidth};
`;

export const content = () => `
  position: relative;
  width: 100%;
  outline: none;
  transition: transform ${tokens.motionDuration_medium} ${tokens.motionEase_out},
              visibility ${tokens.motionDuration_medium} ${tokens.motionEase_out},
              opacity ${tokens.motionDuration_medium} ${tokens.motionEase_out};
`;

export const contentAnimation = props => {
  const commonExitStyles = `
    transform: translateY(${tokens.spacing_200});
    opacity: 0;
    transition: transform ${tokens.motionDuration_fast} ${tokens.motionEase_in},
                visibility ${tokens.motionDuration_fast} ${tokens.motionEase_in},
                opacity ${tokens.motionDuration_fast} ${tokens.motionEase_in};
  `;

  switch (props.state) {
    case 'entered':
      return `
        pointer-events: auto;
        transform: translateY(0);
        visibility: visible;
        opacity: 1;
      `;
    case 'exiting':
      return `
        ${commonExitStyles}
      `;
    case 'exited':
      return `
        ${commonExitStyles}
        pointer-events: none;
      `;
    default:
      break;
  }
};

export const closeButton = () => `
  color: ${tokens.color_gray_700};
  padding: 0;
  font-size: ${tokens.fontSize_700};
  position: absolute;
  right: ${tokens.spacing_200};
  top: ${tokens.spacing_200};
  z-index: calc(${tokens.zIndex_overlay} + 1);
`;
