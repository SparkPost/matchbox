import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withPositioning } from '../WithPositioning';

import styles from './Tooltip.module.scss';

export class Tooltip extends Component {
  static displayName = 'Tooltip';

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
    /**
     * Disables automatic positioning
     */
    forcePosition: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    /**
     * These props are provided automatically through the withPositioning HOC
     */
    preferredPosition: PropTypes.shape({
      top: PropTypes.bool,
      bottom: PropTypes.bool,
      left: PropTypes.bool,
      right: PropTypes.bool
    })
  };

  static defaultProps = {
    right: true,
    bottom: true,
    horizontalOffset: '0px',
    forcePosition: false,
    preferredPosition: {
      bottom: true,
      left: false,
      right: true,
      top: false
    }
  }

  render() {
    const {
      children,
      content,
      dark,
      top,
      left,
      horizontalOffset,
      preferredPosition,
      forcePosition,
      positionRef
    } = this.props;

    const positionTop = preferredPosition.top || (top && !forcePosition);
    const positionLeft = preferredPosition.left || (left && !forcePosition);

    const wrapperClasses = classnames(
      styles.Wrapper,
      dark && styles.dark,
      positionTop && styles.top,
      positionLeft && styles.left,
    );

    const offset = positionLeft ? { right: horizontalOffset } : { left: horizontalOffset };

    return (
      <span className={wrapperClasses} ref={positionRef}>
        { children }
        <span className={styles.Tooltip} style={offset}>
          <span className={styles.Tip} />
          <div className={styles.Content}>{ content }</div>
        </span>
      </span>
    );
  }
}

export default withPositioning(Tooltip);
