import React from 'react';
import { Button, UnstyledLink } from '@sparkpost/matchbox';
import GithubIcon from '../components/GithubIcon';

import styles from './index.module.scss';

const IndexPage = () => (
  <div>
    <h1 className={styles.Title}>Matchbox</h1>
    <p className={styles.Description}>
      A React component library built by <UnstyledLink className={styles.Link} to='https://www.sparkpost.com'>SparkPost</UnstyledLink>.
    </p>

    <div className={styles.ButtonWrapper}>
      <Button size='large' color='orange' to='https://sparkpost.github.io/matchbox/'>Components</Button>
      <Button size='large' outline to='https://github.com/SparkPost/matchbox'><GithubIcon /> Github</Button>
    </div>
  </div>
);

export default IndexPage;
