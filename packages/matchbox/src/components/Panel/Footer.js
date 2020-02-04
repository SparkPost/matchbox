import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../Grid';
import styles from './Panel.module.scss';

function Footer(props) {
  const {
    // Left aligned content
    left,
    // Right aligned content
    right,
    ...rest
  } = props;

  return (
    <div className={styles.Footer} {...rest}>
      <Grid>
        <Grid.Column xs={6}>
          <div className={styles.Left}>{left}</div>
        </Grid.Column>
        <Grid.Column xs={6}>
          <div className={styles.Right}>{right}</div>
        </Grid.Column>
      </Grid>
    </div>
  );
}

Footer.displayName = 'Panel.Fooger';
Footer.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default Footer;
