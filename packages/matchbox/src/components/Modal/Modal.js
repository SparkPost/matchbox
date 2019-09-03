import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Close } from '@sparkpost/matchbox-icons';
import { WindowEvent } from '../WindowEvent';
import { Button } from '../Button';
import { Grid } from '../Grid';
import Content from './Content';
import { onKey } from '../../helpers/keyEvents';
import styles from './Modal.module.scss';

class Modal extends Component {
  static displayName = 'Modal';

  static propTypes = {
    /**
     * Controlled open state of the modal
     */
    open: PropTypes.bool,

    /**
     * An optional function that is called on key down 'Escape' and on click outside modal content
     */
    onClose: PropTypes.func,

    /**
     * Modal content
     */
    children: PropTypes.node,

    showCloseButton: PropTypes.bool
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
      onKey('escape', onClose)(e);
    }
  }

  render() {
    const {
      onClose,
      open,
      children,
      className,
      showCloseButton,
      ...rest
    } = this.props;

    const modalClasses = classnames(
      styles.Modal,
      open && styles.open,
      className
    );

    return (
      <div className={modalClasses} onClose={onClose} {...rest} ref={(node) => this.container = node} role="dialog" aria-modal="true">
        <Grid center='xs' middle='xs' className={styles.Grid}>
          <Grid.Column xs={11} md={9} xl={7}>
            <Content contentRef={(node) => this.content = node} open={open}>
              <WindowEvent event='keydown' handler={this.handleKeyDown} />
              <WindowEvent event='click' handler={this.handleOutsideClick} />
              {showCloseButton && (
                <Button className={styles.CloseButton} flat onClick={onClose} data-test='modal-close'>
                  Close <Close />
                </Button>
              )}
              {children}
            </Content>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Modal;
