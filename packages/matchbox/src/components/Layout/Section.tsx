import React from 'react';
import { Column } from '../Column';

type SectionProps = {
  children?: React.ReactNode;
  annotated?: boolean;
  'data-id'?: string;
};

function Section(props) {
  const { annotated, children }: SectionProps = props;

  return (
    <Column width={annotated ? 1 / 3 : 1} data-id={props['data-id']}>
      {children}
    </Column>
  );
}

Section.displayName = 'Layout.Section';

export default Section;
