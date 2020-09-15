import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { PanelPaddingContext } from './context';

const SubHeader = React.forwardRef(function SubHeader(props, userRef) {
  const { children, className } = props;

  const paddingContext = React.useContext(PanelPaddingContext);

  return (
    <Box
      as="p"
      {...paddingContext}
      className={className}
      pb={[0, null, 0]}
      fontSize="200"
      color="gray.700"
      tabIndex="-1"
      ref={userRef}
    >
      {children}
    </Box>
  );
});

SubHeader.displayName = 'Panel.SubHeader';

SubHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SubHeader;
