import React from 'react';
import { WindowEvent } from '@sparkpost/matchbox';

export default {
  title: 'Utility/WindowEvent',
};

export const BasicWindowEvent = () => (
  <WindowEvent event="keydown" handler={() => console.log('Keydown')} />
);
