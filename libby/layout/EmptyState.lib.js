import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { EmptyState, Picture, Video } from '@sparkpost/matchbox';
import AccountsImage from '@sparkpost/matchbox-media/images/Accounts.jpg';
import AnalyticsImage from '@sparkpost/matchbox-media/images/Analytics.jpg';
import RVVideo from '@sparkpost/matchbox-media/videos/Recipient-Validation-Crop.webm';
import RVVideo2 from '@sparkpost/matchbox-media/videos/Recipient-Validation-Crop.mp4';

describe('EmptyState', () => {
  add('basic usage', () => (
    <EmptyState>
      <EmptyState.Header> Manage your email templates</EmptyState.Header>
      <EmptyState.Content>
        <p>Build, test, preview and send your transmissions.</p>
      </EmptyState.Content>
      <EmptyState.Media>
        <Picture seeThrough>
          <Picture.Image src={AnalyticsImage} />
        </Picture>
      </EmptyState.Media>
      <EmptyState.Action>Create Template</EmptyState.Action>
      <EmptyState.Action variant="outline">Learn More</EmptyState.Action>
    </EmptyState>
  ));

  add('list in description', () => (
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
      <EmptyState.Media>
        <Picture seeThrough>
          <Picture.Image src={AccountsImage} />
        </Picture>
      </EmptyState.Media>
      <EmptyState.Action>Create Template</EmptyState.Action>
      <EmptyState.Action variant="outline">Learn More</EmptyState.Action>
    </EmptyState>
  ));

  add('video media', () => (
    <EmptyState>
      <EmptyState.Header> Manage your email templates</EmptyState.Header>
      <EmptyState.Content>
        <p>Build, test, preview and send your transmissions.</p>
      </EmptyState.Content>
      <EmptyState.Media>
        <Video loop>
          <Video.Source src={RVVideo} type="video/webm" />
          <Video.Source src={RVVideo2} type="video/mp4" />
        </Video>
      </EmptyState.Media>
      <EmptyState.Action>Create Template</EmptyState.Action>
      <EmptyState.Action variant="outline">Learn More</EmptyState.Action>
    </EmptyState>
  ));

  describe('Deprecated', () => {
    add('legacy usage', () => (
      <EmptyState.LEGACY
        title="Manage your email templates"
        primaryAction={{
          content: 'Create Template',
          color: 'orange',
        }}
        secondaryAction={{ content: 'Learn More' }}
      >
        <p>Build, test, preview and send your transmissions.</p>
      </EmptyState.LEGACY>
    ));
  });
});
