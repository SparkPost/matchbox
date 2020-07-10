import React from 'react';
import { getWindow } from '../helpers/window';
import copy from 'copy-to-clipboard';

/**
 * Copies a string to the clipboard and provides copied state
 *
 * @example
 * const { copy, copied } = useCopyToClipboard({ timeout: 2000 });
 *
 * <Button onClick={() => copy('string')}>
 *  {copied ? 'String has been copied' : 'Copy to clipboard'}
 * </Button>
 */
function useCopyToClipboard({ timeout = 1000 } = {}) {
  const environment = getWindow();
  const [copied, setCopied] = React.useState(false);

  function handleCopy(string) {
    copy(string);
    setCopied(true);
  }

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
    copy: handleCopy,
    copied,
  };
}

export default useCopyToClipboard;
