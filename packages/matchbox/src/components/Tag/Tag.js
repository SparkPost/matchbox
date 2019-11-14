import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { onKey } from '../../helpers/keyEvents';
import { Close } from '@sparkpost/matchbox-icons';
import { UnstyledLink } from '../UnstyledLink';
import { ScreenReaderOnly } from '../ScreenReaderOnly';

import styles from './Tag.module.scss';

class Tag extends Component {
  static displayName = 'Tag';

  static propTypes = {
    /**
     * 'orange' | 'blue' | 'yellow' | 'red'
     */
    color: PropTypes.oneOf(['orange', 'blue', 'yellow', 'red', 'navy', 'purple']),
    /**
     * Close button is hidden unless this is provided
     */
    onRemove: PropTypes.func,
    /**
     * Tag content
     */
    children: PropTypes.node
  };

  handleKeydown = (e) => {
    const { onRemove } = this.props;

    onKey('space', () => onRemove())(e);
  }

  render() {
    const {
      color,
      children,
      onRemove,
      className,
      ...rest
    } = this.props;

    const tagClasses = classnames(
      styles.Tag,
      onRemove && styles.hasRemove,
      color && styles[color],
      className
    );

    const closeMarkup = onRemove
      ? <UnstyledLink
        component='button'
        className={styles.Close}
        onClick={onRemove}
        onKeyDown={this.handleKeydown}>
        <Close size={16} />

        <ScreenReaderOnly>Close</ScreenReaderOnly>
      </UnstyledLink>
      : null;

    return (
      <div className={tagClasses} {...rest}>
        <div className={styles.Content}>{children}</div>
        {closeMarkup}
      </div>
    );
  }
}


export default Tag;
