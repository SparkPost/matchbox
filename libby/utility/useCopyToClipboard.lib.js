import React from 'react';
import { Button, useCopyToClipboard } from '@sparkpost/matchbox';
import { describe, add } from '@sparkpost/libby-react';

describe('useCopyToClipboard', () => {
  add('example usage', () => {
    const { copy, copied } = useCopyToClipboard();
    return (
      <Button onClick={() => copy('copied text')}>{copied ? 'Copied!' : 'Click to Copy'}</Button>
    );
  });
});
