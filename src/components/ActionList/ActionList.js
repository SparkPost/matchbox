import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { linkFrom } from '../UnstyledLink';
import { Icon } from '../Icon';
import styles from './ActionList.module.scss';

const Section = ({ section }) => {
  const actions = section.actions.map(({ className, selected, content, ...action }, index) => {

    const classes = classnames(
      styles.Action,
      className
    );

    const linkContent = selected
      ? <span>{content}<Icon name='Check' className={styles.Check} size={21}/></span>
      : content;

    return linkFrom({ content: linkContent, ...action, className: classes }, index);
  });

  return (
    <div className={styles.Section}>
      { actions }
    </div>
  );
};

class ActionList extends Component {
  static propTypes = {
    /**
      * Actions
      * e.g. [{ content: 'action label', onClick: callback() }]
      */
    actions: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
      ]).isRequired
    })),
    /**
      * Creates sections
      * e.g. [{ actions:[{ content: 'action label', onClick: callback() }]}]
      */
    sections: PropTypes.arrayOf(PropTypes.shape({
      actions: PropTypes.array
    }))
  };
  render() {
    const {
      actions,
      sections,
      ...rest
    } = this.props;

    let list = actions ? [{ actions }] : [];
    if (sections) {
      list = list.concat(sections);
    }

    const listMarkup = list.map((section, index) => <Section section={section} key={index} />);

    return (
      <div className={styles.ActionList} {...rest}>
        { listMarkup }
      </div>
    );
  }
}

export default ActionList;
