import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { EmptyState } from '@sparkpost/matchbox';
import TemplatesImage from '../storyHelpers/TemplatesImage';
import AccountsImage from '@sparkpost/matchbox-media/images/Accounts.jpg';
import AnalyticsImage from '@sparkpost/matchbox-media/images/Analytics.jpg';

export default {
  title: 'Layout|Empty State',
};

export const BasicEmptyState = () => (
  <EmptyState>
    <EmptyState.Header as="h2" looksLike="h2">
      Manage your email templates
    </EmptyState.Header>
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

export const AnotherEmptyState = () => (
  <EmptyState>
    <EmptyState.Header> Manage your email templates</EmptyState.Header>
    <EmptyState.Content>
      <p>Build, test, preview and send your transmissions.</p>
    </EmptyState.Content>
    <EmptyState.Image src={AnalyticsImage} />
    <EmptyState.Action>Create Template</EmptyState.Action>
    <EmptyState.Action variant="outline">Learn More</EmptyState.Action>
  </EmptyState>
);

export const LEGACY = withInfo()(() => (
  <EmptyState.LEGACY
    title="Manage your email templates"
    image={TemplatesImage}
    primaryAction={{
      content: 'Create Template',
      onClick: action('Create Template'),
      color: 'orange',
    }}
    secondaryAction={{ content: 'Learn More', onClick: action('Learn More') }}
  >
    <p>Build, test, preview and send your transmissions.</p>
  </EmptyState.LEGACY>
));
