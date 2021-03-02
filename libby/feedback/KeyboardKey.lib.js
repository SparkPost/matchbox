import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { KeyboardKey } from '@sparkpost/matchbox';

describe('KeyboardKey', () => {
  add('renders correctly', () => (
    <>
      Press the <KeyboardKey>Ctrl</KeyboardKey> + <KeyboardKey>S</KeyboardKey> key to save
    </>
  ));
});
