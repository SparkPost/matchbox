import { tokens } from '@sparkpost/design-tokens';
import { keyframes, css } from 'styled-components';

export const dimensions = (props) => {
  let size: string;

  switch (props.$size) {
    case 'small':
      size = '20px';
      break;
    case 'large':
      size = '60px';
      break;
    case 'medium':
    default:
      size = '28px';
  }

  return `
    width: ${size};
    height: ${size};
  `;
};

export const circleOuter = (props) => {
  return css`
    fill: none;
    animation: ${rotateAnimation} ${props.$rotationOnly ? '1.2s' : '2s'} linear infinite;
  `;
};

function getDefaultStrokes(size: string) {
  switch (size) {
    case 'small':
      return css`
        stroke-dasharray: 35 50;
        stroke-dashoffset: -10;
      `;
    case 'large':
      return css`
        stroke-dasharray: 110 200;
        stroke-dashoffset: -25;
      `;
    case 'medium':
    default:
      return css`
        stroke-dasharray: 55 100;
        stroke-dashoffset: -15;
      `;
  }
}

export const circle = (props) => {
  let color, strokeWidth, animation;

  switch (props.color) {
    case 'gray':
      color = tokens.color_gray_800;
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

  switch (props.$size) {
    case 'small':
      strokeWidth = '2px';
      animation = smallDashAnimation;
      break;
    case 'large':
      strokeWidth = '4px';
      animation = largeDashAnimation;
      break;
    case 'medium':
    default:
      strokeWidth = '3px';
      animation = dashAnimation;
  }

  return css`
    stroke: ${color};
    stroke-width: ${strokeWidth};
    stroke-linecap: round;

    ${props.rotationOnly
      ? getDefaultStrokes(props.size)
      : css`
          animation: ${animation} 1.5s ease-in-out infinite;
        `}
  `;
};

const smallDashAnimation = keyframes`
  0% {
    stroke-dasharray: 1 50;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 30 50;
    stroke-dashoffset: -10;
  }
  100% {
    stroke-dasharray: 40 50;
    stroke-dashoffset: -48;
  }
`;

const dashAnimation = keyframes`
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
    stroke-dashoffset: -68;
  }
`;

const largeDashAnimation = keyframes`
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

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;
