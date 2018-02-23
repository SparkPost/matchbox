import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { WindowEvent } from '../WindowEvent';
import PopoverOverlay from './PopoverOverlay';

import styles from './Popover.module.scss';

class Popover extends Component {
  static displayName = 'Popover';

  static propTypes = {
    /**
     * A React component to will trigger the popover
     * Click events are handled for you
     */
    trigger: PropTypes.element,
    /**
      * If you want to control open state yourself, set this to true
      */
    manualTrigger: PropTypes.bool,
    /**
      * Adds a padding to the Popover
      */
    sectioned: PropTypes.bool,
    /**
      * Opens the popover
      */
    open: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    top: PropTypes.bool,
    bottom: PropTypes.bool,

    onClose: PropTypes.func,
    /**
      * Popover Content
      */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    /**
     * Element ID for the portal that will house tooltips. Appends to body if not provided.
     */
    portalId: PropTypes.string
  };

  static defaultProps = {
    right: true,
    bottom: true
  }

  state = {
    open: false
  }

  componentWillMount() {
    this.setState({ open: this.props.open });
  }

  handleClose = (e) => {
    const { onClose } = this.props;

    this.setState({ open: false }, () => {
      onClose && onClose();
    });
  }

  handleClickOutside = (e) => {
    if (this.state.open && this.wrapper && !this.wrapper.contains(e.target) && this.activator && !this.activator.contains(e.target)) {
      this.handleClose(e);
    }
  }

  handleEsc = (e) => {
    if (this.state.open && e.key === 'Escape') {
      this.handleClose(e);
    }
  }

  handleTrigger = () => {
    if (!this.props.manualTrigger) {
      this.setState({ open: true });
    }
  }

  renderPopover = () => {
    const {
      children,
      sectioned,
      trigger,
      className = '',
      open,
      manualTrigger,
      top,
      bottom,
      left,
      right,
      portalId,
      ...rest
    } = this.props;

    const shouldBeOpen = manualTrigger ? open : this.state.open;

    const popoverClasses = classnames(
      styles.Popover,
      sectioned && styles.sectioned,
      className
    );

    const wrapperClasses = classnames(
      shouldBeOpen && styles.open,
      top && styles.top,
      left && styles.left
    );

    return (
      <div className={wrapperClasses} ref={(wrapper) => this.wrapper = wrapper}>
        <WindowEvent event='click' handler={this.handleClickOutside} />
        <WindowEvent event='keydown' handler={this.handleEsc} />
        <div className={popoverClasses} {...rest}>
          <span className={styles.Tip} />
          <div className={styles.Content} >
            { children }
          </div>
        </div>
      </div>
    );
  }

  renderActivator = ({ activatorRef }) => {
    const {
      trigger,
      wrapper: WrapperComponent = 'span'
    } = this.props;

    const assignRefs = (node) => {
      this.activator = node;
      activatorRef(node);
    };

    return (
      <WrapperComponent
        className={styles.Activator}
        onClick={this.handleTrigger}
        ref={assignRefs}>
        { trigger }
      </WrapperComponent>
    );
  }

  render() {
    return (
      <PopoverOverlay
        portalId={this.props.portalId}
        renderActivator={this.renderActivator}
        renderPopover={this.renderPopover} />
    );
  }
}

export default Popover;
