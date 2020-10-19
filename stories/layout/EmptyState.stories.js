import React from 'react';

import { action } from '@storybook/addon-actions';
import { EmptyState } from '@sparkpost/matchbox';
// import TemplatesImage from '../storyHelpers/TemplatesImage';
import AccountsImage from '@sparkpost/matchbox-media/images/Accounts.jpg';

export default {
  title: 'Layout|Empty State',
};

export const BasicEmptyState = withInfo({ propTables: [EmptyState] })(() => (
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
));

export const LEGACY = () => (
  <EmptyState.LEGACY
    title="Manage your email templates"
    // image={TemplatesImage}
    primaryAction={{
      content: 'Create Template',
      onClick: action('Create Template'),
      color: 'orange',
    }}
    secondaryAction={{ content: 'Learn More', onClick: action('Learn More') }}
  >
    <p>Build, test, preview and send your transmissions.</p>
  </EmptyState.LEGACY>
);
