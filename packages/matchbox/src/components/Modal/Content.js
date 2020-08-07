import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '../Box';

const Content = React.forwardRef(function Content(props, ref) {
  const { children } = props;

  return (
    <Box maxHeight="60vh" overflow="scroll" data-id="modal-content" p="500" ref={ref}>
      {children}
    </Box>
  );
});

Content.displayName = 'Modal.Content';
Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
