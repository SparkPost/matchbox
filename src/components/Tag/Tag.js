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
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    outline: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  render() {
    const {
      primary,
      secondary,
      outline,
      children,
      onRemove,
      className,
      ...rest
    } = this.props;

    const tagClasses = classnames(
      styles.Tag,
      primary && styles.primary,
      secondary && styles.secondary,
      outline && styles.outline,
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
