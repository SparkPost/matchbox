import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function ComboBox(props) {
  const { children, isOpen, style, rootRef, ...rest } = props;

  function getChild(name) {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return null;
      }

      if (child.type.name === name) {
        return React.cloneElement(child);
      }
    });
  }

  const trigger = React.useMemo(() => getChild('ComboBoxTextField'), [children]);
  const menu = React.useMemo(() => getChild('ComboBoxMenu'), [children]);

  return (
    <Box position="relative" ref={rootRef} style={style} {...rest}>
      {/* <Popover open={isOpen} trigger={trigger}>
        {menu}
      </Popover> */}
      {trigger}
      {menu}
    </Box>
  );
}

ComboBox.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  /**
   * Maps to Downshift's refKey set in getRootProps. refKey must be set to "rootRef"
   */
  rootRef: PropTypes.func,
};

export default ComboBox;
