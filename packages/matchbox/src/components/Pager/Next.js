import React from 'react';
import PropTypes from 'prop-types';
import { ArrowForward } from '@sparkpost/matchbox-icons';
import { Button } from '../Button';
import styles from './Pager.module.scss';

const Next = ({ disabled, onClick }) => (
  <Button className={styles.Next} disabled={disabled} onClick={onClick}>
    <ArrowForward size={16} />
  </Button>
);

Next.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Next.displayName = 'Pager.Next';

export default Next;
