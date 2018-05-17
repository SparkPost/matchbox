import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { WindowEvent } from '../WindowEvent';
import PopoverOverlay from './PopoverOverlay';
import PopoverContent from './PopoverContent';
import { onKey } from '../../helpers/keyEvents';

import styles from './Popover.module.scss';

class Popover extends Component {
  static displayName = 'Popover';

  static propTypes = {
    /**
     * A React component to will trigger the popover
     * Click event is handled for you if this component is uncontrolled.
     */
    trigger: PropTypes.element,
    /**
      * Adds a padding to the Popover
      */
    sectioned: PropTypes.bool,
    /**
      * Opens the popover.
      * By default, open state is handled automatically. Passing this value in will turn this into a controlled component.
      */
    open: PropTypes.bool,
    left: PropTypes.bool,
    right: PropTypes.bool,
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    /**
      * Callback function that is called when clicking outside the popover, or hitting escape.
      */
    onClose: PropTypes.func,
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

    // This component becomes "controlled" if the prop 'open' is given a boolean value
    if (controlledOpen === undefined) {
      this.setState({ open: false });
    }
  }

  uncontrolledToggle = () => {
    this.setState({ open: !this.state.open });
  }

  handleOutsideClick = (e) => {
    const { open: controlledOpen, onClose } = this.props;
    const isOutside = this.popover && !this.popover.contains(e.target) && this.activator && !this.activator.contains(e.target);

    if (controlledOpen && onClose && isOutside) {
      onClose(e);
    }

    if (this.state.open && isOutside) {
      this.uncontrolledToggle();
    }
  }

  handleEsc = (e) => {
    const { open: controlledOpen, onClose } = this.props;

    if (controlledOpen && onClose) {
      onKey('escape', onClose)(e);
    }

    if (this.state.open) {
      onKey('escape', this.uncontrolledToggle)(e);
    }
  }

  handleTrigger = () => {
    if (this.state.open === false) {
      this.uncontrolledToggle();
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
      top && styles.top,
      left && styles.left
    );

    return (
      <PopoverContent
        open={shouldBeOpen}
        popoverRef={(node) => this.popover = node}
        wrapperClasses={wrapperClasses}
        popoverClasses={popoverClasses}
        {...rest}>
        <WindowEvent event='click' handler={this.handleOutsideClick} />
        <WindowEvent event='keydown' handler={this.handleEsc} />
        {children}
      </PopoverContent>
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
