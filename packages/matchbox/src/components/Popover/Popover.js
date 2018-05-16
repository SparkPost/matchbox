import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { WindowEvent } from '../WindowEvent';
import PopoverOverlay from './PopoverOverlay';
import { onKey } from '../../helpers/keyEvents';

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
      * Adds a padding to the Popover
      */
    sectioned: PropTypes.bool,
    /**
      * Opens the popover. By default open state is handled automatically. Passing this value in will turn this into a controlled component.
      */
    open: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    top: PropTypes.bool,
    bottom: PropTypes.bool,

    onClose: PropTypes.func,
    onOutsideClick: PropTypes.func,
    /**
      * Popover Content
      */
    children: PropTypes.node,
    /**
     * Element ID for the portal that will house Popover. Appends to body if not provided.
     */
    portalId: PropTypes.string
  };

  static defaultProps = {
    right: true,
    bottom: true
  }

  state = {
    open: null
  }

  componentDidMount() {
    const { open: controlledOpen } = this.props;

    // This component becomes "uncontrolled" if the prop 'open' is given a boolean value
    if (controlledOpen === undefined) {
      this.setState({ open: false });
    }
  }

  handleClose = (e) => {
    const { onClose } = this.props;

    if (this.state.open) {
      this.setState({ open: false });
    }

    onClose && onClose();
  }

  handleOutsideClick = (e) => {
    const { open: controlledOpen, onOutsideClick } = this.props;
    const isOutside = this.popover && !this.popover.contains(e.target) && this.activator && !this.activator.contains(e.target);

    if (controlledOpen && isOutside) {
      onOutsideClick && onOutsideClick(e);
    }

    if (this.state.open && isOutside) {
      this.handleClose(e);
    }
  }

  handleEsc = (e) => {
    if (this.state.open) {
      onKey('escape', this.handleClose)(e);
    }
  }

  handleTrigger = () => {
    if (this.state.open === false) {
      this.setState({ open: true });
    }
  }

  renderPopover = () => {
    const {
      children,
      sectioned,
      trigger,
      className = '',
      open: controlledOpen,
      top,
      bottom,
      left,
      right,
      portalId,
      onClose,
      onOutsideClick,
      fixed,
      ...rest
    } = this.props;

    const shouldBeOpen = controlledOpen || this.state.open;

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
      <div className={wrapperClasses} ref={(node) => this.popover = node}>
        <WindowEvent event='click' handler={this.handleOutsideClick} />
        <WindowEvent event='keydown' handler={this.handleEsc} />
        <div className={popoverClasses} {...rest}>
          <span className={styles.Tip} />
          <div className={styles.Content} >
            {children}
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
        {trigger}
      </WrapperComponent>
    );
  }

  render() {
    const { fixed } = this.props;

    return (
      <PopoverOverlay
        fixed={fixed}
        portalId={this.props.portalId}
        renderActivator={this.renderActivator}
        renderPopover={this.renderPopover} />
    );
  }
}

export default Popover;
