import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { PanelPaddingContext, PanelAppearanceContext } from './context';

const SubHeader = React.forwardRef(function SubHeader(props, userRef) {
  const { as, children, className } = props;

  const paddingContext = React.useContext(PanelPaddingContext);
  const appearanceContext = React.useContext(PanelAppearanceContext);

  return (
    <Box
      as={as}
      {...paddingContext}
      className={className}
      pb={[0, null, 0]}
      fontSize="200"
      fontWeight="normal"
      lineHeight="200"
      color={appearanceContext === 'inverted' ? 'white' : 'gray.700'}
      tabIndex="-1"
      ref={userRef}
    >
      {children}
    </Box>
  );
});

SubHeader.displayName = 'Panel.SubHeader';
SubHeader.defaultProps = {
  as: 'h4',
};
SubHeader.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SubHeader;
