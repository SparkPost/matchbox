import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Icon } from '../Icon';
import { UnstyledLink } from '../UnstyledLink';

import styles from './Tag.module.scss';

class Tag extends Component {
  static displayName = 'Tag';

  static propTypes = {
    onRemove: PropTypes.func,
    orange: PropTypes.bool,
    blue: PropTypes.bool,
    yellow: PropTypes.bool,
    green: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    const {
      orange,
      blue,
      yellow,
      green,
      children,
      onRemove,
      className,
      ...rest
    } = this.props;

    const tagClasses = classnames(
      styles.Tag,
      orange && styles.orange,
      blue && styles.blue,
      yellow && styles.yellow,
      green && styles.green,
      onRemove && styles.hasRemove,
      className
    );

    const closeMarkup = onRemove
      ? <UnstyledLink
          className={styles.Close}
          onClick={onRemove}>
          <Icon name='Close' size={16}/>
        </UnstyledLink>
      : null;

    return (
      <div className={tagClasses} {...rest}>
        <div className={styles.Content}>{ children }</div>
        { closeMarkup }
      </div>
    );
  }
}


export default Tag;
