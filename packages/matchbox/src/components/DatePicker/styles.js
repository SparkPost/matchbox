import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';

export const StyledDay = styled(Box)`
  background: ${tokens.color_white};
  color: ${tokens.color_gray_800};
  cursor: pointer;

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
    if (props.modifiers.inBetween) {
      return `
        color: ${tokens.color_gray_900};
        background: ${tokens.color_blue_200};
      `;
    }
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
export const wrapper = props => `
  position: relative;
  max-width: ${props.numberOfMonths === 1 ? '17.5rem' : '36.5rem'};

  .DayPicker-wrapper {
    position: relative;
    padding: 0;
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
