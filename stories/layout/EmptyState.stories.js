import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';

import { EmptyState } from '@sparkpost/matchbox';
import TemplatesImage from '../storyHelpers/TemplatesImage';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Layout|Empty State',
};

export const BasicEmptyState = withInfo()(() => (
  <EmptyState
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
  </EmptyState>
));
