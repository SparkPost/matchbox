/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { WindowEvent } from '../WindowEvent';
import { onEvent } from '../../helpers/keyEvents';

import { Grid } from '../Grid';
import styles from './Modal.module.scss';

class Modal extends Component {
  static displayName = 'Modal';

  static propTypes = {
    /**
     * Controlled open state of the modal
     */
    open: PropTypes.bool,

    /**
     * An optional function that is called on key down 'Escape' and click outside modal content
     */
    onClose: PropTypes.func,

    /**
     * Modal content
     */
    children: PropTypes.node
  };

  handleOutsideClick = (e) => {
    const { open, onClose } = this.props;
    const isOutside = this.content && !this.content.contains(e.target) && this.container && this.container.contains(e.target);

    if (open && isOutside && onClose) {
      onClose(e);
    }
  }

  handleKeyDown = (e) => {
    const { onClose, open } = this.props;

    if (open && onClose) {

      onEvent('escape', onClose)(e);
    }
  }

  render() {
    const {
      open,
      children,
      className,
      ...rest
    } = this.props;

    const modalClasses = classnames(
      styles.Modal,
      open && styles.open,
      className
    );

    return (
      <div className={modalClasses} {...rest} ref={(node) => this.container = node}>
        <WindowEvent event='keydown' handler={this.handleKeyDown} />
        <WindowEvent event='click' handler={this.handleOutsideClick} />
        <div className={styles.Background} />
        <Grid center='xs' middle='xs' className={styles.Grid}>
          <Grid.Column xs={11} md={9} xl={7}>
            <div className={styles.Content} ref={(node) => this.content = node}>
              { children }
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Modal;
