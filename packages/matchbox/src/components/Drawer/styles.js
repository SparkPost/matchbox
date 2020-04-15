import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${tokens.color_gray_900};
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

export const Container = styled.div`
  background: ${tokens.color_white};
  position: absolute;
  top: 0;
  bottom: 0;
  ${'' /* TODO Make this configurable and reference sizing theme */}
  max-width: 32rem;
  width: 80vw;
  right: ${props => (props.position === 'right' ? '0' : 'auto')};
  left: ${props => (props.position === 'left' ? '0' : 'auto')};

  ${props => {
    const visible = `
      transform: translateX(0);
      transition: transform ${tokens.motionDuration_medium} ${tokens.motionEase_out};
    `;

    const hidden = `
      ${'' /* transform: translateX(); */}
      transform: translateX(${props.position === 'left' ? '-100%' : '100%'});
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
