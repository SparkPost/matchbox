import React from 'react';
import PropTypes from 'prop-types';
import { padding } from 'styled-system';
import { createPropTypes } from '@styled-system/prop-types';
import { pick } from '../../helpers/props';
import { Box } from '../Box';

const Content = React.forwardRef(function Content(props, ref) {
  const { children, restrictHeight, ...rest } = props;
  const systemProps = pick(rest, padding.propNames);

  return (
    <Box
      data-id="modal-content"
      p="500"
      {...systemProps}
      maxHeight={restrictHeight ? '60vh' : null}
      overflowY={restrictHeight ? 'auto' : null}
      ref={ref}
    >
      {children}
    </Box>
  );
});

Content.displayName = 'Modal.Content';
Content.defaultProps = {
  restrictHeight: true,
};
Content.propTypes = {
  children: PropTypes.node,
  restrictHeight: PropTypes.bool,
  ...createPropTypes(padding.propNames),
};

export default Content;
