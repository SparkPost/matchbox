import { tokens } from '@sparkpost/design-tokens';

export const listItem = props => {
  const baseStyles = `
    position: relative;
    list-style-type: none;
  `;

  const selectedStyles = `
    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0px;
      left: 0;
      right: 0;
      height: 2px;
      background: ${tokens.color_blue_700};
    }
  `;

  const styles = props.selected ? baseStyles + selectedStyles : baseStyles;

  return styles;
};

export const link = props => `
  font-size: ${tokens.fontSize_400};
  line-height: ${tokens.lineHeight_400};
  text-decoration: none;
  font-weight: ${tokens.fontWeight_medium};

  padding: ${tokens.spacing_200} 0;
  opacity: ${props.disabled ? 0.4 : 1};
  pointer-events: ${props.disabled ? 'none' : 'auto'};

  &, &:visited {
    color: ${props.selected ? tokens.color_blue_700 : tokens.color_gray_900};
    &:hover {
      color: ${tokens.color_blue_700};
    }
  }
`;
