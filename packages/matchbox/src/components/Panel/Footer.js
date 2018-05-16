import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../Grid';
import styles from './Panel.module.scss';

class Footer extends Component {

  static displayName = 'Panel.Footer';

  static propTypes = {
    /**
      * Left aligned content
      */
    left: PropTypes.node,

    /**
      * Right aligned content
      */
    right: PropTypes.node
  };

  render() {
    const { left, right, ...rest } = this.props;

    return (
      <div className={styles.Footer} {...rest}>
        <Grid>
          <Grid.Column xs={6}>
            <div className={styles.Left}>
              {left}
            </div>
          </Grid.Column>
          <Grid.Column xs={6}>
            <div className={styles.Right}>
              {right}
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Footer;
