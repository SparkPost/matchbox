import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Portal } from '@sparkpost/matchbox';

describe('Portal', () => {
  add('basic portal', () => (
    <>
      <p>
        This component creates a react portal at the provided container element id, or appends to
        document body if not provided.
      </p>
      <Portal>
        <div style={{ position: 'fixed', top: 0, left: 0 }}>Portal Content</div>
      </Portal>
    </>
  ));
});
