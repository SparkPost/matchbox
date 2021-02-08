import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { ProgressBar } from '@sparkpost/matchbox';

describe('ProgressBar', () => {
  add('normal size', () => <ProgressBar completed={54} mb={400} label="My Progress Bar" />);
  add('small size', () => <ProgressBar completed={82} size="small" label="My Progress Bar" />);
});
