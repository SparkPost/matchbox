import { tokens } from '@sparkpost/design-tokens';

export const select = (props) => `
  appearance: none;
  font-weight: ${tokens.fontWeight_medium};
  font-size: ${tokens.fontSize_200};
  &:hover {
    cursor: ${props.disabled ? 'not-allowed;' : 'pointer;'}
  }
`;

export const chevron = (props) => `
  position: absolute;
  z-index: ${tokens.zIndex_default};
  top: 8%;
  right: ${tokens.spacing_300};
  height: 100%;
  fill: ${tokens.color_blue_700};
  user-select: none;
  pointer-events: none;
  ${props.$disabled ? 'display: none' : ''}
`;
