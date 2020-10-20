import React from 'react';
import { Button, useCopyToClipboard } from '@sparkpost/matchbox';

export default {
  title: 'Utility/useCopyToClipboard',
};

export const exampleUsage = () => {
  const { copy, copied } = useCopyToClipboard();
  return (
    <Button onClick={() => copy('copied text')}>{copied ? 'Copied!' : 'Click to Copy'}</Button>
  );
};
