import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '@sparkpost/matchbox-icons';
import { tokens } from '@sparkpost/design-tokens';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import { Box } from '../Box';
import { Text } from '../Text';
import { Button } from '../Button';

const Header = React.forwardRef(function Header(props, ref) {
  const { children, onClose, showCloseButton } = props;
  return (
    <Box data-id="drawer-header" bg="white" p="500" ref={ref}>
      <Box display="flex">
        <Box flex="1">
          <Text as="h2" fontSize="400" lineHeight="400">
            {children}
          </Text>
        </Box>
        {showCloseButton && (
          <Box
            position="relative"
            width={tokens.spacing_500} // TODO update with FE-1012
          >
            <Button flat size="small" fullWidth px="0" onClick={onClose}>
              <ScreenReaderOnly>Close</ScreenReaderOnly>
              {/* TODO Support square Buttons without hacks */}
              <Box position="absolute" left="0" top="0" p="100">
                <Close size={25} />
              </Box>
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
});

Header.displayName = 'Drawer.Header';

Header.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  showCloseButton: PropTypes.bool,
};

Header.defaultProps = {
  showCloseButton: true,
};

export default Header;
