import styled from 'styled-components';
import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';
import { focusOutline } from '../../styles/helpers';

const inputHeight = '2.5rem';

export const StyledInputWrapper = styled(Box)<{ $hasError?: boolean; $isDisabled?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  background: ${(props) => (props.$isDisabled ? tokens.color_gray_200 : tokens.color_white)};
  border: ${(props) =>
    props.$hasError
      ? `${tokens.borderWidth_100} solid ${tokens.color_red_700}`
      : `${tokens.borderWidth_100} solid ${tokens.color_gray_400}`};
  border-radius: ${tokens.borderRadius_100};
  min-height: ${inputHeight};

  ${focusOutline({ modifier: '&:focus-within' })}
`;

export const StyledInput = styled('input')`
  display: inline-block;
  flex: 1;
  background: none;
  border: none;
  outline: none;
  padding-left: ${tokens.spacing_300};
  padding-right: ${tokens.spacing_300};
  line-height: calc(${inputHeight} - 2px);
  height: calc(${inputHeight} - 2px);
  font-weight: ${tokens.fontWeight_normal};
  color: ${tokens.color_gray_900};
  &:disabled {
    cursor: not-allowed;
  }
`;
