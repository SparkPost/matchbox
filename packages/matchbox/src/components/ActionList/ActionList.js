import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { linkFrom } from '../UnstyledLink';
import { Check } from '@sparkpost/matchbox-icons';
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

class ActionList extends Component {
  static displayName = 'ActionList';

  static propTypes = {
    /**
      * Actions
      * e.g. [{ content: 'action label', onClick: callback() }]
      */
    actions: PropTypes.arrayOf(PropTypes.shape({ content: PropTypes.node.isRequired })),
    /**
      * Creates sections
      * e.g. [[{ content: 'action label', onClick: callback() }]]
      */
    sections: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({ content: PropTypes.node.isRequired }))),

    /**
      * Max height of list
      */
    maxHeight: PropTypes.oneOf([PropTypes.string, PropTypes.number])
  };

  render() {
    const {
      actions,
      sections,
      maxHeight = 'none',
      ...rest
    } = this.props;

    let list = [actions];
    if (sections) {
      list = list.concat(sections);
    }

    const listMarkup = list.map((section, index) => <Section section={section} key={index} />);

    return (
      <div className={styles.ActionList} style={{ maxHeight }} {...rest}>
        {listMarkup}
      </div>
    );
  }
}

export default ActionList;
