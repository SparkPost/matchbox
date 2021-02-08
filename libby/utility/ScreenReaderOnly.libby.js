import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { ScreenReaderOnly } from '@sparkpost/matchbox';

describe('ScreenReaderOnly', () => {
  add('basic example', () => (
    <p>
      I am content that is available to all users...
      <ScreenReaderOnly id="example-id">
        ...and I am content that is only available to screen reader users.
      </ScreenReaderOnly>
    </p>
  ));

  add('as a div', () => (
    <ScreenReaderOnly as="div">
      <h2>I am a block-level element that must be inside another block-level element</h2>
    </ScreenReaderOnly>
  ));
});
