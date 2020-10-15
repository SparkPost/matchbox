import React from 'react';
import PropTypes from 'prop-types';
import { Column } from '../Column';

function Section(props) {
  const { annotated, children } = props;

  return (
    <Column width={annotated ? 1 / 3 : 1} data-id={props['data-id']}>
      {children}
    </Column>
  );
}

Section.displayName = 'Layout.Section';

Section.propTypes = {
  /**
   * Section Children
   */
  children: PropTypes.node,
  'data-id': PropTypes.string,
  /**
   * Use for annotated sections, sets width to 1/3
   */
  annotated: PropTypes.bool,
};

export default Section;
