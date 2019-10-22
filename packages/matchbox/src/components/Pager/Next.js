import React from 'react';
import { ArrowForward } from '@sparkpost/matchbox-icons';
import { Button } from '../Button';
import { ScreenReaderOnly } from '../ScreenReaderOnly';
import styles from './Pager.module.scss';

const Next = (props) => (
  <Button {...props} className={styles.Next}>
    <ArrowForward size={16} />

    <ScreenReaderOnly>Next</ScreenReaderOnly>
  </Button>
);

Next.displayName = 'Pager.Next';

export default Next;
