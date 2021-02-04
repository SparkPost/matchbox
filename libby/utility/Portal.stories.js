import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Portal } from '@sparkpost/matchbox';

storiesOf('Utility|Portal', module).add(
  'basic portal',
  withInfo(
    'This component creates a react portal at the provided container element id, or appends to document body if not provided.',
  )(() => (
    <Portal>
      <div style={{ position: 'fixed', top: 10, left: 30 }}>Portal Content</div>
    </Portal>
  )),
);
