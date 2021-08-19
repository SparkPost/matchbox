import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { HelpText } from '@sparkpost/matchbox';

describe('HelpText', () => {
  add('renders text', () => <HelpText>Help me</HelpText>);
});
