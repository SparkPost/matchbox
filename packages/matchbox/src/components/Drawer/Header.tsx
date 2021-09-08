import React from 'react';
import { Close } from '@sparkpost/matchbox-icons';
import { tokens } from '@sparkpost/design-tokens';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { Box } from '../Box';
import { Text } from '../Text';
import { Button } from '../Button';
import { DrawerContext } from './context';

export type DrawerHeaderProps = {
  children?: React.ReactNode;
  showCloseButton?: boolean;
};

const Header = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(function Header(props, ref) {
  const { children, showCloseButton = true } = props;
  const context = React.useContext(DrawerContext);

  return (
    <Box data-id="drawer-header" bg="white" p="500" ref={ref}>
      <Box display="flex">
        <Box flex="1">
          <Text as="h2" fontSize="400" lineHeight="400">
            {children}
          </Text>
        </Box>
        {showCloseButton && (
          <Button
            variant="text"
            size="small"
            width={tokens.spacing_600}
            px="0"
            onClick={context.onClose}
          >
            <ScreenReaderOnly>Close</ScreenReaderOnly>
            <Close size={25} />
          </Button>
        )}
      </Box>
    </Box>
  );
});

Header.displayName = 'Drawer.Header';
export default Header;
