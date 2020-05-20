import { tokens } from '@sparkpost/design-tokens';
import { keyframes, css } from 'styled-components';

export const circleOuter = props => {
  let size = '60px';

  if (props.size === 'small') {
    size = '28px';
  }

  return css`
    width: ${size};
    height: ${size};
    fill: none;
    animation: ${rotateAnimation} 2s linear infinite;
  `;
};

export const circle = props => {
  let color;

  switch (props.color) {
    case 'gray':
      color = tokens.color_brand_gray;
      break;
    case 'orange':
      color = tokens.color_brand_orange;
      break;
    case 'white':
      color = tokens.color_white;
      break;
    case 'blue':
    default:
      color = tokens.color_blue_700;
      break;
  }

  return css`
    stroke: ${color};
    stroke-width: ${props.size === 'small' ? '3px' : '4px'};
    stroke-linecap: round;

    stroke-dasharray: ${props.size === 'small' ? '100 100' : '150 200'};
    stroke-dashoffset: -10;
    animation: ${props.size === 'small' ? smallDashAnimation : dashAnimation} 1.5s ease-in-out
      infinite;
  `;
};

const dashAnimation = keyframes`
  0% {
    stroke-dasharray: 1 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 120 200;
    stroke-dashoffset: -25;
  }
  100% {
    stroke-dasharray: 120 200;
    stroke-dashoffset: -145;
  }
`;

const smallDashAnimation = keyframes`
  0% {
    stroke-dasharray: 1 100;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 60 100;
    stroke-dashoffset: -15;
  }
  100% {
    stroke-dasharray: 80 100;
    stroke-dashoffset: -70;
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;
