import { tokens } from '@sparkpost/design-tokens';

export const base = () => `
    display: inline-flex;
    align-items: center;
    border-radius: ${tokens.borderRadius_100};
    user-select: none;
    font-weight: ${tokens.fontWeight_medium};
    justify-content: center;
    text-decoration: none;
    white-space: nowrap;
    transition-property: background, color, border, outline;
    transition-duration: .15s;
    border: 1px solid transparent;
  `;

export const visualSize = props => {
  switch (props.buttonSize) {
    case 'large':
      return `
        height: 3.5rem;
        font-size: ${tokens.fontSize_300};
        padding: 0 ${tokens.spacing_500};
      `;
    case 'small':
      return `
        height: 2rem;
        font-size: ${tokens.fontSize_200};
        padding: 0 ${tokens.spacing_400};
      `;
    case 'default':
    default:
      return `
        height: 2.5rem;
        font-size: ${tokens.fontSize_200};
        padding: 0 ${tokens.spacing_400};
      `;
  }
};

export const colorVariant = props => {
  let color;
  let hoverColor;

  switch (props.buttonColor) {
    case 'orange': // To be deprecated
    case 'blue':
      color = tokens.color_blue_700;
      hoverColor = tokens.color_blue_800;
      break;

    case 'red':
      color = tokens.color_red_700;
      hoverColor = tokens.color_red_800;
      break;

    case 'gray':
    default:
      color = tokens.color_gray_900;
      hoverColor = tokens.color_gray_1000;
      break;
  }

  switch (props.visualWeight) {
    case 'strong':
      return `
        &, &:visited {
          background: ${color};
          color: ${tokens.color_white};
    
          &:hover {
            ${!props.disabled ? `background: ${hoverColor};` : ''}
            color: ${tokens.color_white};
          }
        }
      `;
    case 'weak':
      return `
        &, &:visited {
          background: transparent;
          color: ${color};
          &:hover {
            ${!props.disabled ? `background: ${tokens.color_gray_200};` : ''}
            color: ${color};
          }
        }
      `;
    case 'normal':
    default:
      return `
        &, &:visited {
          border: 1px solid ${color};
          background: transparent;
          color: ${color};
          &:hover {
            ${!props.disabled ? `background: ${tokens.color_gray_200};` : ''}
            color: ${color};
          }
        }
      `;
  }
};

export const disabled = props => {
  if (props.disabled) {
    return `
      opacity: 0.6;
      &:hover {
        cursor: not-allowed;
      }
    `;
  }
};

export const fullWidth = props => {
  if (props.fullWidth) {
    return `
      display: block;
      width: 100%;
    `;
  }
};

export const group = buttonSelector => () => `
  & > ${buttonSelector} {
    margin-right: -1px;
  }
`;
