import React from 'react';
import Action from './Action';
import { filterByVisible } from '../../helpers/array';

import { StyledSection } from './styles';

export type SectionProps = {
  /**
   * @deprecated
   */
  section?: React.ComponentProps<typeof Action>[];
  children?: React.ReactNode;
};

const Section = React.forwardRef<HTMLDivElement, SectionProps>(function Section(
  props: SectionProps,
  userRef,
) {
  const { section, children } = props;

  if (children) {
    return <StyledSection ref={userRef}>{children}</StyledSection>;
  }

  const visibleActions = section
    ? filterByVisible(section).map((action, i) => <Action key={i} {...action} />)
    : [];

  if (!visibleActions.length) {
    return null;
  }

  return <StyledSection ref={userRef}>{visibleActions}</StyledSection>;
});

Section.displayName = 'ActionList.Section';

export default Section;
