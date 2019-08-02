import React from 'react';
import tokens from '@sparkpost/design-tokens/dist/index.meta.json';
import _ from 'lodash';
import styles from './Token.module.scss';

function Token(props) {
  const { name } = props;

  // TODO export raw names from tokens
  const token = _.find(tokens, ['friendly', name]);

  if (!token) {
    return <span>Token Not Found</span>;
  }


  function getPrefix() {
    switch (token.type) {
      case 'font-size':
      case 'line-height':
      case 'font-family':
        return <span className={styles.Type}>Aa</span>;
      case 'color':
        return <span className={styles.Color} style={{ background: token.value }}></span>;
      default:
        return '';
    }
  }

  return (
    <span className={styles.Token}>
      {getPrefix()}
      {token.friendly}
    </span>
  );
}

export default Token;
