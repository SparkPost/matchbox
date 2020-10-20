import React from 'react';

import { EmptyState } from '@sparkpost/matchbox';
import AccountsImage from '@sparkpost/matchbox-media/images/Accounts.jpg';

export default {
  title: 'Layout/Empty State',
};

export const BasicEmptyState = () => (
  <EmptyState>
    <EmptyState.Header> Manage your email templates</EmptyState.Header>
    <EmptyState.Content>
      <p>Build, test, preview and send your transmissions.</p>
      <EmptyState.List>
        <li>
          One One One One One One One One One One One One One One One One One One One One One One
          One One One One One One One One One One One One One{' '}
        </li>
        <li>Two</li>
        <li>Three</li>
      </EmptyState.List>
    </EmptyState.Content>
    <EmptyState.Image src={AccountsImage} />
    <EmptyState.Action>Create Template</EmptyState.Action>
    <EmptyState.Action variant="outline">Learn More</EmptyState.Action>
  </EmptyState>
);

export const LEGACY = () => (
  <EmptyState.LEGACY
    title="Manage your email templates"
    primaryAction={{
      content: 'Create Template',
      onClick: () => console.log('Create Template'),
      color: 'orange',
    }}
    secondaryAction={{ content: 'Learn More', onClick: () => console.log('Learn More') }}
  >
    <p>Build, test, preview and send your transmissions.</p>
  </EmptyState.LEGACY>
);
