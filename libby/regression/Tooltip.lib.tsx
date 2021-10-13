import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Tooltip, Button } from '@sparkpost/matchbox';

describe('Visual Regression', () => {
  add('Tooltip', () => (
    <Tooltip id="test-tooltip" content="I am a Tooltip">
      <Button aria-describedby="test-tooltip">Button</Button>
    </Tooltip>
  ));
});
