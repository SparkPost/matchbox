import React, { Component } from 'react';
import classnames from 'classnames';
import { Check } from '@sparkpost/matchbox-icons';
import { linkFrom } from '../UnstyledLink';
import styles from './ActionList.module.scss';

const Section = ({ section }) => {
  const actions = section.map(({ className, highlighted, selected, content, ...action }, index) => {

    const classes = classnames(
      styles.Action,
      highlighted && styles.highlighted,
      className
    );

    const linkContent = selected
      ? <span>{content}<Check className={styles.Check} size={21}/></span>
      : content;

    return linkFrom({ content: linkContent, ...action, className: classes }, index);
  });

  return (
    <div className={styles.Section}>
      {actions}
    </div>
  );
};
Section.displayName = 'ActionList.Section';

export default Section;
