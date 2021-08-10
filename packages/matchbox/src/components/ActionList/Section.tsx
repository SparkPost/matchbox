import React from 'react';
import PropTypes from 'prop-types';
import Action from './Action';
import { filterByVisible } from '../../helpers/array';

import { StyledSection } from './styles';

type Props = {
  children?: React.ReactNode;
  section?: any[];
};

type Ref = any;

function SectionRender(props: Props, userRef: Ref) {
  const { section, children } = props;

  if (children) {
    return <StyledSection ref={userRef}>{children}</StyledSection>;
  }

  const visibleActions = section
    ? filterByVisible(section).map((action: any, i: number) => <Action key={i} {...action} />)
    : [];

  if (!visibleActions.length) {
    return null;
  }

  return <StyledSection ref={userRef}>{visibleActions}</StyledSection>;
}

const Section = React.forwardRef<Ref, Props>(SectionRender);

Section.displayName = 'ActionList.Section';
Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
