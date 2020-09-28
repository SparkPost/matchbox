import React from 'react';

import { Box } from '../Box';

function Header(props) {
  return (
    <Box
      as="h1"
      width={['auto', null, '45%']}
      fontSize={['600', null, null, '700']}
      lineHeight={['600', null, null, '700']}
    >
      {props.children}
    </Box>
  );
}

Header.displayName = 'EmptyState.Header';

export default Header;
