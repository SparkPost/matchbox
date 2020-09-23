import React from 'react';
import PropTypes from 'prop-types';
import { padding } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '../../helpers/systemProps';

import { Box } from '../Box';

const Content = React.forwardRef(function Content(props, ref) {
  const { children, ...rest } = props;
  const systemProps = pick(rest, padding.propNames);

  return (
    <Box
      data-id="modal-content"
      p="500"
      {...systemProps}
      maxHeight="60vh"
      overflowY="auto"
      ref={ref}
    >
      {children}
    </Box>
  );
});

Content.displayName = 'Modal.Content';
Content.propTypes = {
  children: PropTypes.node,
  ...createPropTypes(padding.propNames),
};

export default Content;
