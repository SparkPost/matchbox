import React from 'react';
import PropTypes from 'prop-types';
import Action, { ActionProps } from './Action';
import { filterByVisible } from '../../helpers/array';

import { StyledSection } from './styles';

export type SectionProps = {
  /**
   * @deprecated
   */
  section?: ActionProps[];
  children?: React.ReactNode;
};

const Section = React.forwardRef<HTMLDivElement, SectionProps>(function Section(props, userRef) {
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
Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
