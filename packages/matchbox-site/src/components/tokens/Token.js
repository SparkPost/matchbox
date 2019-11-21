import React from 'react';
import { meta } from '@sparkpost/design-tokens';
import { Tooltip } from '@sparkpost/matchbox';
import _ from 'lodash';
import copy from 'copy-to-clipboard';
import styles from './Token.module.scss';

function Token(props) {
  const { name } = props;
  const [clicked, setClicked] = React.useState(false);
  const token = _.find(meta, ['name', name]);

  if (!token) {
    return <span className={styles.Token}>Token Not Found</span>;
  }

  function handleClick() {
    copy(token.value);
    setClicked(true);
  }

  React.useEffect(() => {
    let timeout;
    if (clicked) {
      timeout = setTimeout(() => {
        setClicked(false);
      }, 1500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [clicked]);

  function getPrefix() {
    switch (token.type) {
      case 'font-size':
        return <span className={styles.Size}>Aa</span>;
      case 'line-height':
        return <span className={styles.Height}>Aa</span>;
      case 'font-family':
        return <span className={styles.Family}>Aa</span>;
      case 'color':
        return (
          <span
            className={styles.Color}
            style={{ background: token.value }}
          ></span>
        );
      default:
        return '';
    }
  }

  return (
    <Tooltip dark width='auto' content={clicked ? 'Copied' : token.value}>
      <span className={styles.Token} onClick={handleClick}>
        {getPrefix()}
        {token.friendly}
      </span>
    </Tooltip>
  );
}

export default Token;
