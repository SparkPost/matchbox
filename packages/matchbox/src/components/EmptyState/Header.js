import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../Box';

function Header(props) {
  return (
    <Box as="h1" fontSize={['600', null, null, '700']} mb={300}>
      {props.children}
    </Box>
  );
}

Header.displayName = 'EmptyState.Header';

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
