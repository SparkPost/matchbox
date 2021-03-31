import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { padding } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '@styled-system/props';
import { Box } from '../Box';
import { DrawerContext } from './context';

const Container = styled.div`
  ${padding}
`;

const Footer = React.forwardRef(function Footer({ children, ...rest }, userRef) {
  const systemProps = pick(rest);
  const context = React.useContext(DrawerContext);

  return (
    <Box
      data-id="drawer-footer"
      bg="white"
      borderTop="400"
      bottom="0"
      position="fixed"
      left="0"
      right="0"
      ref={context.footerRef}
    >
      <Container p="500" {...systemProps} ref={userRef}>
        {children}
      </Container>
    </Box>
  );
});

Footer.displayName = 'Drawer.Footer';
Footer.propTypes = {
  children: PropTypes.node,
  ...createPropTypes(padding.propNames),
};

export default Footer;
