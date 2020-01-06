import { tokens } from '@sparkpost/design-tokens';

export const base = (props) => `
    display: inline-block;
    border: none;
    border-radius: ${tokens.borderRadius_100};
    user-select: none;
    font-weight: ${tokens.fontWeight_medium};
    text-decoration: none;
    white-space: nowrap;
    vertical-align: middle;
    transition-property: background, color, border, outline;
    transition-duration: .15s;
    border: 1px solid transparent;
  `;

export const size = (props) => {
  switch (props.size) {
    case 'large':
      return `
        line-height: calc(3.5rem - 2px);
        font-size: ${tokens.fontSize_300};
        padding: 0 ${tokens.spacing_500};
      `;
    case 'small':
      return `
        line-height: calc(${tokens.spacing_600} - 2px);
        font-size: ${tokens.fontSize_200};
        padding: 0 ${tokens.spacing_400};
      `;
    case 'default':
    default:
      return `
        line-height: calc(2.5rem - 2px);
        font-size: ${tokens.fontSize_200};
        padding: 0 ${tokens.spacing_400};
      `;
  }
};

export const colorVariant = (props) => {
  let color;
  let hoverColor;

  switch (props.buttonColor) {
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

  if (props.visualWeight === 'strong') {
    return `
    &, &:visited {
      background: ${color};
      color: ${tokens.color_white};

      :not([disabled]):hover {
        background: ${hoverColor};
        color: ${tokens.color_white};
      }
    }
    `;
  }

  if (props.visualWeight === 'weak') {
    return `
    &, &:visited {
      background: transparent;
      color: ${color};
      &:not([disabled]):hover {
        color: ${color};
        background: ${tokens.color_gray_200};
      }
    }
    `;
  }

  return `
    &, &:visited {
      border: 1px solid ${color};
      color: ${color};
      &:not([disabled]):hover {
        background: ${tokens.color_gray_200};
        color: ${color};
      }
    }
  `;
};

export const disabled = (props) => {
  if (props.disabled) {
    return `
      opacity: 0.6;
      &:hover {
        cursor: not-allowed;
      }
    `;
  }
};

export const fullWidth = (props) => {
  if (props.fullWidth) {
    return `
      display: block;
      width: 100%;
      text-align: center;
    `;
  }
};

export const group = (buttonSelector) => () => `
    & > ${buttonSelector} {
      border-radius: 0;
      margin-right: -1px;

      &:first-child {
        border-top-left-radius: ${tokens.borderRadius_100};
        border-bottom-left-radius: ${tokens.borderRadius_100};
      }
      &:last-child {
        border-top-right-radius: ${tokens.borderRadius_100};
        border-bottom-right-radius: ${tokens.borderRadius_100};
      }
    }
  `;
