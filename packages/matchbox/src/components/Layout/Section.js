import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Box';

function Section(props) {
  const { variant, children } = props;
  let width = '100%';

  if (variant === 'twoColumn') {
    width = '50%';
  }

  if (variant === 'annotatedLeft') {
    width = '300px';
  }

  if (variant === 'annotatedRight') {
    width = 'calc(100% - 300px)';
  }

  return (
    <Box width={['100%', null, width]} mb="36px" pl="500">
      {children}
    </Box>
  );
}

Section.displayName = 'Layout.Section';

Section.propTypes = {
  /**
   * Section Children
   */
  children: PropTypes.node,
  /**
   * The section type (i.e. one column, two columns, or annotated)
   */
  variant: PropTypes.oneOf(['oneColumn', 'twoColumn', 'annotatedLeft', 'annotatedRight']),
};

Section.defaultProps = {
  variant: 'oneColumn',
};

export default Section;
