import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { KeyboardKey } from '@sparkpost/matchbox';

export default {
  title: 'Feedback|KeyboardKey',
};

export const Shortcut = withInfo()(() => (
  <>
    Press the <KeyboardKey>Ctrl</KeyboardKey> + <KeyboardKey>S</KeyboardKey> key to save
  </>
));
