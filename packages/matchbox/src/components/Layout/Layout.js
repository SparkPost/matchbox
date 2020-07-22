import React from 'react';
import PropTypes from 'prop-types';
import { tokens } from '@sparkpost/design-tokens';
import { Box } from '../Box';

import Section from './Section';

const Layout = React.forwardRef(function Layout(props, ref) {
  const { children } = props;

  return (
    <Box display="flex" flexWrap="wrap" ml={`-${tokens.spacing_500}`} ref={ref}>
      {children}
    </Box>
  );
});

Layout.displayName = 'Layout';

Layout.propTypes = {
  /**
   * Layout Children
   */
  children: PropTypes.node,
};

Layout.Section = Section;

export default Layout;
