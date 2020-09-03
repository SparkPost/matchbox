import React from 'react';
import styled from 'styled-components';
import { Box, styles } from '@sparkpost/matchbox';
import { tokens } from '@sparkpost/design-tokens';

const StyledButton = styled(Box)`
  ${styles.buttonReset};
  ${styles.focusOutline({ offset: '0px', color: tokens.color_gray_700 })};
  cursor: pointer;
  ${({ theme }) => `
    background: transparent;
    color: ${theme.colors.gray[700]};
    padding: ${theme.space[200]} ${theme.space[300]};
    font-size: ${theme.fontSizes[100]}
    &:hover {
      color: ${theme.colors.gray[900]};
    }
  `}
`;

function EditorButton(props) {
  return (
    <StyledButton
      as="button"
      background="gray.300"
      color="red.200"
      {...props}
    />
  );
}

export default EditorButton;
