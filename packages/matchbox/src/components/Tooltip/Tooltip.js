import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TooltipOverlay from './TooltipOverlay';

import styles from './Tooltip.module.scss';

class Tooltip extends Component {
  static displayName = 'Tooltip';

  static propTypes = {
    content: PropTypes.node,
    /**
     * Disables hover events
     */
    disabled: PropTypes.bool,
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
    children: PropTypes.node,
    /**
     * These props are provided automatically through the Overlay component
     */
    preferredDirection: PropTypes.shape({
      top: PropTypes.bool,
      bottom: PropTypes.bool,
      left: PropTypes.bool,
      right: PropTypes.bool
    }),
    /**
     * Element ID for the portal that will house tooltips. Appends to body if not provided.
     */
    portalId: PropTypes.string
  };

  static defaultProps = {
    right: true,
    bottom: true,
    horizontalOffset: '0px',
    forcePosition: false,
    preferredDirection: {
      bottom: true,
      left: false,
      right: true,
      top: false
    }
  }

  state = {
    hover: false
  }

  handleMouseOver = () => {
    this.setState({ hover: true });
  }

  handleMouseOut = () => {
    this.setState({ hover: false });
  }

  renderTooltip = ({ preferredDirection }) => {
    const {
      content,
      dark,
      top,
      left,
      horizontalOffset,
      forcePosition,
      disabled,
      width = '210px'
    } = this.props;

    const positionTop = preferredDirection.top || (top && !forcePosition);
    const positionLeft = preferredDirection.left || (left && !forcePosition);

    const wrapperClasses = classnames(
      !disabled && this.state.hover && styles.hover,
      dark && styles.dark,
      positionTop && styles.top,
      positionLeft && styles.left,
    );

    const offset = positionLeft ? { right: horizontalOffset } : { left: horizontalOffset };

    return (
      <span className={wrapperClasses}>
        <span className={styles.Tooltip} style={{ ...offset, width }}>
          <span className={styles.Tip} />
          <div className={styles.Content}>{content}</div>
        </span>
      </span>
    );
  }

  renderActivator = ({ activatorRef }) => (
    <span
      className={styles.Activator}
      onMouseOver={this.handleMouseOver}
      onMouseOut={this.handleMouseOut}
      ref={activatorRef}>
      {this.props.children}
    </span>
  )

  render() {
    return (
      <TooltipOverlay
        eventDebounce={this.props.eventDebounce}
        portalId={this.props.portalId}
        renderTooltip={this.renderTooltip}
        renderActivator={this.renderActivator} />
    );
  }
}

export default Tooltip;
