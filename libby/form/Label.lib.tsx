import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Label } from '@sparkpost/matchbox';

describe('Label', () => {
  add('renders children', () => {
    return <Label>I am a label</Label>;
  });

  add('renders label', () => {
    return <Label label="I am a Label" />;
  });

  add('restricted polymorphic as', () => {
    return <Label as="legend">I am a label</Label>;
  });

  add('hidden', () => {
    return <Label labelHidden>I am a label</Label>;
  });
});
