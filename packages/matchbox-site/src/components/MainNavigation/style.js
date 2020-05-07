import { tokens } from '@sparkpost/design-tokens';

export const listItem = props => {
  const baseStyles = `
    position: relative;
    list-style-type: none;
    margin: 0 0 0 ${tokens.spacing_800};
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
  font-size: font-size(400);
  line-height: line-height(400);
  text-decoration: none;
  color: color(gray, 900) ${
    props.selected ? tokens.color_blue_700 : tokens.color_gray_900
  };
  font-weight: 500;

  padding: spacing(500) 0;
  opacity: ${props.disabled ? 0.4 : 1};
  pointer-events: ${props.disabled ? 'none' : 'auto'};
`;
