import { tokens } from '@sparkpost/design-tokens';

export const listItem = props => {
  const baseStyles = `
    position: relative;
    display: inline-block;
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
  display: inline-block;
  font-size: ${tokens.fontSize_400};
  line-height: ${tokens.lineHeight_500};
  text-decoration: none;
  font-weight: ${tokens.fontWeight_medium};
  margin-top: 0.2rem;

  &, &:visited {
    color: ${props.selected ? tokens.color_blue_700 : tokens.color_gray_900};
    &:hover {
      color: ${tokens.color_blue_700};
    }
  }
`;
