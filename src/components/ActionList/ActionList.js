import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import { linkFrom } from '../UnstyledLink';
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
     })),
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

    const listMarkup = list.map((section, index) => <Section section={section} key={index} />)

    return (
      <div className={styles.ActionList} {...rest}>
        { listMarkup }
      </div>
    );
  }
}

export default ActionList;
