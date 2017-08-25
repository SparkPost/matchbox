import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Grid } from '../Grid';
import styles from './Modal.module.scss';

class Modal extends Component {
  static propTypes = {
    open: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  };

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
      <div className={modalClasses} {...rest}>
        <Grid center='xs' middle='xs' className={styles.Grid}>
          <Grid.Column xs={11} md={9} xl={7}>
            <div className={styles.Content}>
              { children }
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Modal;
