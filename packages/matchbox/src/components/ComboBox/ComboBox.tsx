import React, { ReactNode } from 'react';
import { getChild } from '../../helpers/children';
import { Box } from '../Box';

export type ComboBoxProps = {
  children?: ReactNode;
  style?: React.CSSProperties;
  /**
   * Maps to Downshift's refKey set in getRootProps. refKey must be set to "rootRef"
   */
  rootRef?: React.MutableRefObject<HTMLDivElement>;
};

function ComboBox(props: ComboBoxProps): JSX.Element {
  const { children, style, rootRef, ...rest } = props;

  // Clones children in order to pass the menu into the textfield
  // Textfield inserts the menu in the DOM directly after the input, before helptext and error
  const textfieldWithMenu = React.useMemo(() => {
    return getChild('ComboBoxTextField', { children: getChild('ComboBoxMenu', {}) });
  }, [children]);

  return (
    <Box position="relative" ref={rootRef} style={style} {...rest}>
      {textfieldWithMenu}
    </Box>
  );
}

export default ComboBox;
