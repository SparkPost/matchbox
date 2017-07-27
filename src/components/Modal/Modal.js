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
      children
    } = this.props;

    const modalClasses = classnames(
      styles.Modal,
      open && styles.open
    );

    return (
      <div className={modalClasses}>
        <Grid center='xs' middle='xs' className={styles.Grid}>
          <Grid.Column xs={11} md={7} xl={5}>
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
