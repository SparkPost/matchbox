import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBack } from '@sparkpost/matchbox-icons';
import { Button } from '../Button';
import styles from './Pager.module.scss';

const Previous = ({ disabled, onClick }) => (
  <Button className={styles.Previous} disabled={disabled} onClick={onClick}>
    <ArrowBack size={16} />
  </Button>
);

Previous.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Previous.displayName = 'Pager.Previous';

export default Previous;
