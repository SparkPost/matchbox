import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';

export const StyledDay = styled(Box)`
  color: ${tokens.color_gray_900};
  cursor: pointer;
  opacity: ${props => (props.modifiers.outside ? '0' : '1')};

  ${props => {
    // Disabled styles
    if (props.modifiers.disabled) {
      return `
        opacity: 0.3;
        cursor: not-allowed;
      `;
    }
  }}

  ${props => {
    // Today modifier styles
    if (props.modifiers.today) {
      if (props.modifiers.disabled) {
        return `
          box-shadow: inset 0 0 0 1px ${tokens.color_gray_900};
        `;
      }

      return `
        color: ${tokens.color_blue_800};
        box-shadow: inset 0 0 0 1px ${tokens.color_blue_700};
      `;
    }
  }}

  ${props => {
    // Selected modifier styles
    if (props.modifiers.selected) {
      return `
        color: ${tokens.color_blue_800};
        background: ${tokens.color_blue_300};
      `;
    }
  }}

  ${props => {
    // In Between selected modifier styles
    return `
      color: ${tokens.color_gray_900};
      background: ${props.modifiers.inBetween ? tokens.color_blue_200 : tokens.color_white}
    `;
  }}

  ${props => {
    // First and Last selected modifier styles
    if (props.modifiers.lastSelected || props.modifiers.firstSelected) {
      return `
        color: ${tokens.color_blue_800};
        background: ${tokens.color_blue_300};
      `;
    }
  }}

  ${props => {
    // Hover styles
    if (
      !props.modifiers.disabled &&
      !props.modifiers.selected &&
      !props.modifiers.inBetween &&
      !props.modifiers.firstSelected &&
      !props.modifiers.lastSelected
    ) {
      return `
        &:hover {
          background: ${tokens.color_gray_200};
        }
      `;
    }
  }}
`;

// Daypicker global styles where component overrides are not possible
export const wrapper = () => `
  .DayPicker-wrapper {
    position: relative;
    padding: 0 ${tokens.spacing_500};
    outline: none;

    *:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${tokens.color_blue_700};
      z-index: 1;
    }
  }

  .DayPicker-Months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: row;
  }

  .DayPicker-Month {
    flex: 0 0 auto;

    & + .DayPicker-Month {
      margin-left: ${tokens.spacing_500};
    }
  }

  .DayPicker-WeekdaysRow,
  .DayPicker-Week {
    display: flex;
  }

  .DayPicker-Day {
    flex: 1 0;
  }
`;
