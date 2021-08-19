import React from 'react';
import { Column } from '../Column';

type SectionProps = {
  children?: React.ReactNode;
  annotated?: boolean;
  'data-id'?: string;
};

function Section({ annotated, children, 'data-id': dataId }: SectionProps) {
  return (
    <Column width={annotated ? 1 / 3 : 1} data-id={dataId}>
      {children}
    </Column>
  );
}

Section.displayName = 'Layout.Section';

export default Section;
