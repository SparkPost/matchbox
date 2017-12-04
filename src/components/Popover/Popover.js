import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { WindowEvent } from '../WindowEvent';

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
    /**
      * Popover Content
      */
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

  static defaultProps = {
    right: true,
    bottom: true
  }

  state = {
    open: false
  }

  componentWilMount() {
    this.setState({ open: this.props.open });
  }

  handleClickOutside = (e) => {
    if (this.state.open && this.wrapper && !this.wrapper.contains(e.target)) {
      this.setState({ open: false }, () => {
        this.props.onClose(e);
      });
      
    }
  }

  handleEsc = (e) => {
    if (this.state.open && e.key === 'Escape') {
      this.setState({ open: false });
    }
  }

  handleTrigger = () => {
    if (!this.props.manualTrigger) {
      this.setState({ open: true });
    }
  }

  render() {
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
      wrapper: WrapperComponent = 'span',
      ...rest
    } = this.props;

    const shouldBeOpen = manualTrigger ? open : this.state.open;

    const popoverClasses = classnames(
      styles.Popover,
      sectioned && styles.sectioned,
      className
    );

    const wrapperClasses = classnames(
      styles.Wrapper,
      shouldBeOpen && styles.open,
      top && styles.top,
      left && styles.left
    );

    const triggerMarkup = <span onClick={this.handleTrigger}>{ trigger }</span>;

    return (
      <WrapperComponent className={wrapperClasses} ref={(wrapper) => this.wrapper = wrapper}>
        <WindowEvent event='click' handler={this.handleClickOutside} />
        <WindowEvent event='keydown' handler={this.handleEsc} />
        { triggerMarkup }
        <div className={popoverClasses} {...rest}>
          <span className={styles.Tip} />
          <div className={styles.Content} >
            { children }
          </div>
        </div>
      </WrapperComponent>
    );
  }
}


export default Popover;
