import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../Box';

const Header = React.forwardRef(function Header(props, userRef) {
  return (
    <Box
      as="h1"
      fontSize={['600', null, null, '700']}
      mb={300}
      ref={userRef}
      lineHeight={['600', null, null, '700']}
    >
      {props.children}
    </Box>
  );
});

Header.displayName = 'EmptyState.Header';

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
