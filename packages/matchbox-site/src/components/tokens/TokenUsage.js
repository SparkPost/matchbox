import React from 'react';
import copy from 'copy-to-clipboard';
import styles from './TokenUsage.module.scss';

function TokenUsage(props) {
  const [clicked, setClicked] = React.useState(false);

  function handleClick() {
    copy(props.usage);
    setClicked(true);
  }

  React.useEffect(() => {
    let timeout;
    if (clicked) {
      timeout = setTimeout(() => {
        setClicked(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [clicked]);

  return (
    <span className={styles.TokenUsage} onClick={handleClick}>
      <code>{clicked ? 'Copied' : props.usage}</code>
    </span>
  );
}

export default TokenUsage;
