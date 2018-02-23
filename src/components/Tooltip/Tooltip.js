import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TooltipOverlay from './TooltipOverlay';

import styles from './Tooltip.module.scss';

class Tooltip extends Component {
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
     * These props are provided automatically through the Overlay component
     */
    preferredDirection: PropTypes.shape({
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
      forcePosition
    } = this.props;

    const positionTop = preferredDirection.top || (top && !forcePosition);
    const positionLeft = preferredDirection.left || (left && !forcePosition);

    const wrapperClasses = classnames(
      styles.Wrapper,
      this.state.hover && styles.hover,
      dark && styles.dark,
      positionTop && styles.top,
      positionLeft && styles.left,
    );

    const offset = positionLeft ? { right: horizontalOffset } : { left: horizontalOffset };

    return (
      <span className={wrapperClasses}>
        <span className={styles.Tooltip} style={offset}>
          <span className={styles.Tip} />
          <div className={styles.Content}>{ content }</div>
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
        { this.props.children }
      </span>
    )

  render() {
    return <TooltipOverlay renderTooltip={this.renderTooltip} renderActivator={this.renderActivator} />;
  }
}

export default Tooltip;
