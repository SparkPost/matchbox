import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import FocusLock from 'react-focus-lock';
import classnames from 'classnames';
import styles from './Modal.module.scss';

class Content extends Component {
  contentWrapperRef = React.createRef()

  componentDidMount = () => {
    this.handleOpen();
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.open !== prevProps.open) {
      this.handleOpen();
    }
  }

  handleOpen = () => {
    const { open } = this.props;

    if (open && this.contentWrapperRef.current) {
      this.contentWrapperRef.current.focus();
    }
  }

  render = () => {
    const {
      children,
      contentRef,
      open
    } = this.props;

    return (
      <FocusLock disabled={!open}>
        <Transition
          mountOnEnter
          unmountOnExit
          in={open}
          timeout={{
            enter: 0,
            exit: 150
          }}
        >
          {(state) => {
            const classes = classnames(styles.Content, state && styles[state]);

            return (
              <div className={styles.ContentWrapper} ref={this.contentWrapperRef} tabIndex="-1" data-test="modal-content-wrapper">
                <div className={classes} ref={contentRef}>
                  {children}
                </div>
              </div>
            );
          }}
        </Transition>
      </FocusLock>
    );
  }
}

Content.displayName = 'Modal.Content';
export default Content;
