import React from 'react';
import PropTypes from 'prop-types';
import { Column } from '../Column';

function Section(props) {
  const { annotated, children } = props;

  return <Column width={annotated ? 1 / 3 : 1}>{children}</Column>;
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
  annotated: PropTypes.bool,
};

Section.defaultProps = {
  variant: 'oneColumn',
};

export default Section;
