import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function ComboBox(props) {
  const { children, style, rootRef, ...rest } = props;

  function getChild(name, passedProps) {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        console.error('ComboBox children must be either ComboBoxMenu or ComboBoxTextField');
        return null;
      }

      if (child.type.name === name) {
        return React.cloneElement(child, passedProps);
      }
    });
  }

  // Clones children in order to pass the menu into the textfield
  // Textfield inserts the menu in the DOM directly after the input, before helptext and error
  const textfieldWithMenu = React.useMemo(() => {
    return getChild('ComboBoxTextField', { children: getChild('ComboBoxMenu') });
  }, [children]);

  return (
    <Box position="relative" ref={rootRef} style={style} {...rest}>
      {textfieldWithMenu}
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
