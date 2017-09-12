import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Tooltip.module.scss';

class Tooltip extends Component {
  static propTypes = {
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    dark: PropTypes.bool,
    active: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    horizontalOffset: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
  };

  static defaultProps = {
    left: true,
    bottom: true,
    horizontalOffset: '0px'
  }

  render() {
    const {
      children,
      content,
      dark,
      active,
      top,
      right,
      horizontalOffset
    } = this.props;

    const wrapperClasses = classnames(
      styles.Wrapper,
      dark && styles.dark,
      top && styles.top,
      right && styles.right
    );

    const offset = right ? { right: horizontalOffset } : { left: horizontalOffset };

    return (
      <span className={wrapperClasses}>
        { children }
        <span className={styles.Tooltip} style={offset}>
          <span className={styles.Tip} />
          <span className={styles.Content}>{ content }</span>
        </span>
      </span>
    )
  }
};

export default Tooltip;
