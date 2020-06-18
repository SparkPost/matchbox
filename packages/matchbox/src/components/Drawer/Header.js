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
          <Button flat size="small" width={tokens.spacing_600} px="0" onClick={onClose}>
            <ScreenReaderOnly>Close</ScreenReaderOnly>
            <Close size={25} />
          </Button>
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
