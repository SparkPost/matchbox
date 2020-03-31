import { tokens } from '@sparkpost/design-tokens';

export const base = props => `
  position: fixed;
  z-index: ${tokens.zIndex_overlay};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  min-height: 100%;
  max-height: 100vh;
  opacity: ${props.open ? '1' : '0'};
  pointer-events: ${props.open ? 'auto' : 'none'};
  visibility: ${props.open ? 'visible' : 'hidden'};
  overflow-y: auto;
  will-change: opacity;
  background-color: transparent;
  transition: opacity ${tokens.motionDuration_fast} ${tokens.motionEase_in_out},
              background-color ${tokens.motionDuration_fast} ${tokens.motionEase_in_out};
`;

export const isOpen = props => {
  if (props.open) {
    return `
      background-color: ${tokens.color_gray_1000}70;
    `;
  }
};

export const wrapper = () => `
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const closeButton = () => `
  color: ${tokens.color_gray_1000};
  position: absolute !important;
  right: 0;
  top: -35rem;
`;
