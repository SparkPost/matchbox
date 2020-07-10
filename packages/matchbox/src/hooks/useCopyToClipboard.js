import React from 'react';
import { getWindow } from '../helpers/window';
/**
 import { useCopyToClipboard } from '@sparkpost/matchbox'

  const {
    copy,  // function to programatically copy a string to clipboard
    copied // Copied state, resets after specified timeout
  } = useCopyToClipboard(
    timeout = 1000 // Timeout to reset copied state
  );

  function handleCopy() {
    copy('copy me')
  }

  <Button onClick={handleCopy}>
    {copied ? 'string has been copied' : 'copy to clipboard'}
  </Button>
 */

function useCopyToClipboard(args) {
  const environment = getWindow();
  const { timeout = 1000 } = args;
  const [copied, setCopied] = React.useState(false);

  function copy() {}

  React.useEffect(() => {
    let timer;

    if (copied) {
      timer = environment.setTimeout(() => setCopied(false), timeout);
    }
    return () => {
      environment.clearTimeout(timer);
    };
  }, [copied, timeout]);

  return {
    copy,
    copied,
  };
}

export default useCopyToClipboard;
