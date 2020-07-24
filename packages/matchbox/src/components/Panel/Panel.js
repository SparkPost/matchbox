import React from 'react';
import PropTypes from 'prop-types';
import Legacy from './legacy/Panel';
import { Box } from '../Box';
import Accent from './Accent';
import Action from './Action';
import Header from './Header';
import Section from './Section';

const Panel = React.forwardRef(function Panel(props, userRef) {
  const { accent, children, className } = props;
  const accentColor = accent === true ? 'blue' : accent;

  return (
    <Box
      border="400"
      borderRadius="100"
      className={className}
      position="relative"
      ref={userRef}
      tabIndex="-1"
    >
      {accentColor && <Accent color={accentColor} />}
      {children}
    </Box>
  );
});

Panel.displayName = 'Panel';
Panel.propTypes = {
  accent: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['orange', 'blue', 'red', 'yellow', 'green', 'gray']),
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
};

Panel.LEGACY = Legacy;
Panel.Header = Header;
Panel.Action = Action;
Panel.Section = Section;

export default Panel;
