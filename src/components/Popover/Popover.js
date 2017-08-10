import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import styles from './Popover.module.scss';

class Popover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
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
    this.setState({ open: true });
  }

  render() {
    const {
      children,
      sectioned,
      trigger,
      className = '',
      ...rest
    } = this.props;

    const popoverClasses = classnames(
      styles.Popover,
      sectioned && styles.sectioned,
      className
    );

    const wrapperClasses = classnames(
      styles.Wrapper,
      this.state.open && styles.open
    );

    const triggerMarkup = <span onClick={() => this.handleTrigger()}>{ trigger }</span>;

    return (
      <div className={wrapperClasses}>
        { triggerMarkup }
        <div className={popoverClasses} {...rest}>
          { children }
        </div>
        <span className={styles.Tip} />
      </div>
    );
  }
}


export default Popover;
