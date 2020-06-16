import styled from 'styled-components';
import { Box } from '../Box';
import { tokens } from '@sparkpost/design-tokens';

export const Overlay = styled(Box)`
  opacity: 0;

  ${props => {
    const visible = `
      opacity: 0.7;
      transition: opacity ${tokens.motionDuration_slow} ${tokens.motionEase_out};
    `;

    const hidden = `
      opacity: 0;
      pointer-events: none;
      transition: opacity ${tokens.motionDuration_medium} ${tokens.motionEase_in};
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
  }}
`;

export const Container = styled(Box)`
  ${props => {
    const visible = `
      transform: translateX(0);
      transition: transform ${tokens.motionDuration_medium} ${tokens.motionEase_out};
    `;

    const hidden = `
      transform: translateX(${props.viewportPosition === 'left' ? '-100%' : '100%'});
      pointer-events: none;
      transition: transform ${tokens.motionDuration_fast} ${tokens.motionEase_in};
    `;

    switch (props.state) {
      case 'entered':
        return `
          ${visible}
          pointer-events: auto;
          visibility: visible;
        `;
      case 'entering':
      case 'exiting':
        /**
         * Visibility needs to be set here on entering to ensure
         * FocusLock can focus on Drawer content when opening.
         */

        return `
          ${hidden}
          visibility: visible;
        `;
      case 'exited':
        return `
          ${hidden}
          visibility: hidden;
        `;
    }
  }}
`;
