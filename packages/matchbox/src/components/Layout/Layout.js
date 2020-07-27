import React from 'react';
import PropTypes from 'prop-types';
import { Columns } from '../Columns';

import Section from './Section';
import SectionTitle from './SectionTitle';

const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

const Layout = React.forwardRef(function Layout(props, ref) {
  const { children, collapseBelow } = props;

  return (
    <Columns collapseBelow={collapseBelow} space="500" mb="36px" ref={ref}>
      {children}
    </Columns>
  );
});

Layout.displayName = 'Layout';

Layout.propTypes = {
  /**
   * Layout Children
   */
  children: PropTypes.node,
  /**
   * When to collapse the columns. 'xs', 'sm', 'md', 'lg', or 'xl'
   */
  collapseBelow: PropTypes.oneOf(breakpoints),
};

Layout.defaultProps = {
  collapseBelow: 'md',
};

Layout.Section = Section;
Layout.SectionTitle = SectionTitle;

export default Layout;
