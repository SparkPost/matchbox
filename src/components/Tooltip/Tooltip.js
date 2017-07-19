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
    position: PropTypes.oneOf(['top', 'bottom']),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
  };

  static defaultProps = {
    position: 'bottom'
  }

  render() {
    const {
      children,
      content,
      dark,
      active,
      position
    } = this.props;

    const wrapperClasses = classnames(
      styles.Wrapper,
      dark && styles.dark,
      position === 'top' && styles.top
    );

    return (
      <span className={wrapperClasses}>
        { children }
        <span className={styles.Tooltip}>
          <span className={styles.Content}>{ content }</span>
        </span>
        <span className={styles.Tip} />
      </span>
    )
  }
};

export default Tooltip;
