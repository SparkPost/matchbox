import React from 'react';
import { ScreenReaderOnly } from '@sparkpost/matchbox';

export default {
  title: 'Utility/ScreenReaderOnly',
};

export const Example = () => (
  <p>
    I am content that is available to all users...
    <ScreenReaderOnly id="example-id">
      ...and I am content that is only available to screen reader users.
    </ScreenReaderOnly>
  </p>
);

export const AsADiv = () => (
  <ScreenReaderOnly as="div">
    <h2>I am a block-level element that must be inside another block-level element</h2>
  </ScreenReaderOnly>
);
