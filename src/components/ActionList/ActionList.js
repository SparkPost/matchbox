import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import UnstyledLink, { linkFrom } from '../UnstyledLink';
import styles from './ActionList.module.scss';

const Section = ({ section }) => {
  const actions = section.actions.map((action, index) => {
    return linkFrom({ ...action, className: styles.Action }, index);
  });
  return (
    <div className={styles.Section}>
      { actions }
    </div>
  )
}

class ActionList extends Component {
  render() {
    const {
      actions,
      sections
    } = this.props;

    let list = [{ actions }];

    if (sections) {
      list = [{ actions }].concat(sections);
    }

    const listMarkup = list.map((section, index) => <Section section={section} key={index} />)

    return (
      <div className={styles.ActionList}>
        { listMarkup }
      </div>
    );
  }
}

export default ActionList;
