import { tokens } from '@sparkpost/design-tokens';

export const token = `
  display: inline-block;
  padding: 0 2px;
  position: relative;
  font-weight: ${tokens.fontWeight_semibold};

  &:after {
    display: block;
    content: '';
    position: absolute;
    bottom: 0px;
    left: -1px;
    right: -1px;
    height: 1px;
    background-image: linear-gradient(
      to right,
      ${tokens.color_gray_700},
      ${tokens.color_gray_700} 40%,
      transparent 40%,
      transparent
    );
    background-size: 4px 1px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const color = `
  display: inline-block;
  margin-top: -1px;
  width: 11px;
  height: 11px;
  border-radius: ${tokens.borderRadius_circle};
  margin-right: 4px;
  user-select: none;
`;
