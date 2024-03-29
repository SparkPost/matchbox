import React from 'react';
import { Close } from '@sparkpost/matchbox-icons';
import { tokens } from '@sparkpost/design-tokens';
import styled from 'styled-components';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { Box } from '../Box';
import { Text } from '../Text';
import { Button } from '../Button';
import { ModalContext } from './context';

const StyledButton = styled(Button)`
  color: ${tokens.color_gray_700};
`;

export type ModalHeaderProps = {
  children?: React.ReactNode;
  showCloseButton?: boolean;
};

const Header = React.forwardRef<HTMLDivElement, ModalHeaderProps>(function Header(props, ref) {
  const { children, showCloseButton = true } = props;
  const { onClose } = React.useContext(ModalContext);

  return (
    <Box data-id="modal-header" bg="white" pl="500" pr="500" pt="500" ref={ref}>
      <Box display="flex" alignItems="center">
        <Box flex="1">
          <Text as="h2" fontSize="500" lineHeight="500">
            {children}
          </Text>
        </Box>
        {showCloseButton && (
          <StyledButton
            flat
            size="small"
            width={tokens.spacing_600}
            px="0"
            onClick={onClose}
            data-id="modal-close"
          >
            <ScreenReaderOnly>Close</ScreenReaderOnly>
            <Close size={25} />
          </StyledButton>
        )}
      </Box>
    </Box>
  );
});

Header.displayName = 'Modal.Header';

export default Header;
