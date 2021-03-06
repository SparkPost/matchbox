import React from 'react';
import PropTypes from 'prop-types';
import Action from './Action';
import { filterByVisible } from '../../helpers/array';

import { StyledSection } from './styles';

const Section = React.forwardRef(function Section(props, userRef) {
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
Action.propTypes = {
  children: PropTypes.node,
};

export default Section;
