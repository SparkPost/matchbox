import React from 'react';
import { ArrowForward } from '@sparkpost/matchbox-icons';
import { Button } from '../Button';
import styles from './Pager.module.scss';

const Next = (props) => (
  <Button {...props} className={styles.Next}>
    <ArrowForward size={16} />
  </Button>
);

Next.displayName = 'Pager.Next';

export default Next;
