import React from 'react';
import { Portal } from '@sparkpost/matchbox';

export default {
  title: 'Utility/Portal',
};

export const BasicPortal = () => (
  <Portal>
    <div style={{ position: 'fixed', top: 10, left: 30 }}>Portal Content</div>
  </Portal>
);
