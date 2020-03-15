import { tokens } from '@sparkpost/design-tokens';

import { StyledBox, StyledCheck } from './Checkbox';

export const checkbox = () => `
  position: relative;
  border: none;
  padding: 0;
  margin: 0;
  white-space: nowrap;
`;

export const input = () => `
  &:hover{
    & ${StyledBox} {
      border: 1px solid gray;
    }
  }

  &:focus ${StyledBox} {
    box-shadow: 0 0 0 1px ${tokens.color_blue_700};
    border: 1px solid ${tokens.color_blue_700};
  }

  &:checked {
    & ${StyledBox} {
      border: 1px solid ${tokens.color_blue_700};
    }

    & ${StyledCheck} {
      opacity: 1;
      transform: scale(1);
    }

    &:focus ${StyledBox},
    &:active ${StyledBox} {
      box-shadow: 0 0 0 1px ${tokens.color_blue_700};
      border: 1px solid ${tokens.color_blue_700};
    }
  }

  &:disabled ${StyledBox} {
    background: gray;
  }
  &:disabled ${StyledBox},
  &:disabled ${StyledCheck} {
    cursor: not-allowed;
  }
`;

export const control = () => `
  display: inline-block;
  vertical-align: top;
  &:hover {
    cursor: pointer;
  }
`;

export const box = () => `
  transition: ${tokens.motionDuration_fast};
  position: relative;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border: 1px solid gray;
  border-radius: ${tokens.borderRadius_200};
`;

export const check = () => `
  transition: ${tokens.motionDuration_fast};
  position: absolute;
  top: 3px;
  left: 3px;
  stroke-width: 3px;
  stroke: blue;
  fill: blue;

  opacity: 0;
  transform: scale(0.5);
`;

export const group = () => `
  display: block;
  margin-bottom: 12px;

  & > * {
    margin-bottom: 0;
  }

  &:last-child {
    margin: 0;
  }
`;
