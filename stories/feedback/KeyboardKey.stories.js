import React from 'react';

import { KeyboardKey } from '@sparkpost/matchbox';

export default {
  title: 'Feedback/KeyboardKey',
};

export const Shortcut = () => (
  <>
    Press the <KeyboardKey>Ctrl</KeyboardKey> + <KeyboardKey>S</KeyboardKey> key to save
  </>
);
