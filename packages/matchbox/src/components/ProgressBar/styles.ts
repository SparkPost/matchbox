import { tokens } from '@sparkpost/design-tokens';

export const outerBase = () => `
  position: relative;
  background-color: ${tokens.color_gray_300};
  border-radius: ${tokens.borderRadius_100};
  width: 100%;
`;

export const innerBase = () => `
  background-color: ${tokens.color_blue_700};
  border-radius: ${tokens.borderRadius_100} ${tokens.borderRadius_0} ${tokens.borderRadius_0} ${tokens.borderRadius_100};
`;

export const visualSize = (props) => {
  switch (props.visualSize) {
    case 'small':
      return `
        height: 0.25rem;
      `;
    case 'normal':
    default:
      return `
        height: 0.75rem;
      `;
  }
};

export const calculatedWidth = (props) => {
  let percentage = props.completed;

  if (percentage > 100) {
    percentage = 100;
  } else if (percentage < 1) {
    percentage = 0;
  }

  return `width: ${percentage}%`;
};
