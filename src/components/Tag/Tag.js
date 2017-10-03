import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { UnstyledLink } from '../UnstyledLink';

import styles from './Tag.module.scss';

class Tag extends Component {
  static propTypes = {
    onRemove: PropTypes.func,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    const { children, onRemove, className } = this.props;

    return (
      <div className={classnames(styles.Tag, className)}>
        <div className={styles.Content}>{ children }</div>
        <UnstyledLink
          className={styles.Close}
          onClick={onRemove}>
          <Icon name='Close'/>
        </UnstyledLink>
      </div>
    );
  }
}


export default Tag;
