import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

const Footer = React.forwardRef(function Footer({ children }, ref) {
  return (
    <Box
      data-id="drawer-footer"
      bg="white"
      borderTop="400"
      bottom="0"
      position="fixed"
      left="0"
      right="0"
      p="500"
      ref={ref}
    >
      {children}
    </Box>
  );
});

Footer.displayName = 'Drawer.Footer';
Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
