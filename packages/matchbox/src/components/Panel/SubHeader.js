import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { PanelPaddingContext, PanelAppearanceContext } from './context';

const SubHeader = React.forwardRef(function SubHeader(props, userRef) {
  const { as, children, className, appearance } = props;

  const paddingContext = React.useContext(PanelPaddingContext);
  const appearanceContext = appearance || React.useContext(PanelAppearanceContext);

  return (
    <Box
      as={as}
      {...paddingContext}
      className={className}
      pb={[0, null, 0]}
      fontSize="200"
      fontWeight="normal"
      lineHeight="200"
      color={appearanceContext === 'inverted' ? 'gray.300' : 'gray.700'}
      bg={appearanceContext === 'inverted' ? 'gray.900' : ''}
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
  appearance: PropTypes.oneOf(['appearance', 'default']),
  children: PropTypes.node,
  className: PropTypes.string,
};

export default SubHeader;
