import React from 'react';
import { Columns } from '../Columns';
import { Text } from '../Text';
import { Breakpoints } from 'src/helpers/types';

import Section from './Section';
import SectionTitle from './SectionTitle';

type LayoutProps = {
  children?: React.ReactNode;
  collapseBelow?: Breakpoints;
  'data-id'?: string;
};

const Layout = React.forwardRef(function Layout(props, ref: React.ForwardedRef<HTMLDivElement>) {
  const { children, collapseBelow = 'md' } = props;

  return (
    <Columns
      collapseBelow={collapseBelow}
      space={['400', null, '500']}
      mb="600"
      ref={ref}
      data-id={props['data-id']}
    >
      {children}
    </Columns>
  );
}) as React.ForwardRefExoticComponent<LayoutProps> & {
  Section: typeof Section;
  SectionTitle: typeof SectionTitle;
};

Layout.displayName = 'Layout';

Layout.Section = Section;
Layout.SectionTitle = SectionTitle;

export default Layout;
