import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import styles from './Popover.module.scss';

class Popover extends Component {

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
     /**
      * Popover Content
      */
     children: PropTypes.oneOfType([
       PropTypes.arrayOf(PropTypes.node),
       PropTypes.node
     ]),
  };

  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    }

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleEsc = this.handleEsc.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside);
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleClickOutside(e) {
    const domNode = ReactDOM.findDOMNode(this);
    if ((!domNode || !domNode.contains(e.target))) {
      this.setState({ open: false });
    }
  }

  handleEsc(e) {
    if (this.state.open && e.code === 'Escape') {
      this.setState({ open: false });
    }
  }

  handleTrigger() {
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
      shouldBeOpen && styles.open
    );

    const triggerMarkup = <span onClick={() => this.handleTrigger()}>{ trigger }</span>;

    return (
      <div className={wrapperClasses}>
        { triggerMarkup }
        <div className={popoverClasses} {...rest}>
          <span className={styles.Tip} />
          <div className={styles.Content} >
            { children }
          </div>
        </div>
      </div>
    );
  }
}


export default Popover;
