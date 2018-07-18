import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { buttonsFrom } from '../Button';
import classnames from 'classnames';
import styles from './Panel.module.scss';

const actionOverrides = { flat: true, size: 'small' };

class Section extends Component {

  static displayName = 'Panel.Section';

  static propTypes = {
    /**
      * Actions that build buttons. Most button props will work in here.
      * e.g. { content: 'button label', onClick: callback() }
      */
    actions: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.node.isRequired
    })),
    /**
      * Panel Content
      */
    children: PropTypes.node
  };

  render() {
    const {
      children,
      actions,
      className,
      ...rest
    } = this.props;

    const actionMarkup = actions && actions.length
      ? <div className={styles.Actions}>{buttonsFrom(actions, actionOverrides)}</div>
      : null;

    return (
      <div className={classnames(styles.Body, className)} {...rest}>
        <div className={styles.SectionContent}>
          {children}
        </div>
        {actionMarkup}
      </div>
    );
  }
}

export default Section;
