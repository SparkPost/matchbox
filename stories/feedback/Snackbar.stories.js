import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Snackbar, Inline } from '@sparkpost/matchbox';

export default {
  title: 'Feedback|Snackbar',
};

export const Statuses = withInfo({ propTables: [Snackbar] })(() => (
  <Inline space="600">
    <Snackbar onDismiss={action('Dismissed')}>
      Snakz <a href="https://sparkpost.github.io/matchbox/">link</a>
    </Snackbar>
    <Snackbar status="success" onDismiss={action('Dismissed')}>
      Snakz good <a href="https://sparkpost.github.io/matchbox/">link</a>
    </Snackbar>
    <Snackbar status="warning" onDismiss={action('Dismissed')}>
      Yer suspended <a href="https://sparkpost.github.io/matchbox/">link</a>
    </Snackbar>
    <Snackbar status="danger" onDismiss={action('Dismissed')}>
      Something went wrong <a href="https://sparkpost.github.io/matchbox/">link</a>
    </Snackbar>
  </Inline>
));

export const Large = withInfo()(() => (
  <Snackbar maxWidth={['400px', null, null, '800px']}>
    This one is large enough to get into some bacon ipsum dolor amet pork loin tri-tip turkey
    capicola. Rump doner short ribs biltong burgdoggen meatloaf. Prosciutto pork loin bacon, biltong
    landjaeger salami ham spare ribs flank cupim porchetta leberkas.{' '}
    <a href="https://sparkpost.github.io/matchbox/">link</a>
  </Snackbar>
));

export const ResponsiveSystemProps = withInfo({ propTables: [Snackbar] })(() => (
  <Inline>
    <Snackbar
      status="warning"
      onDismiss={action('Dismissed')}
      my={['200', '700', '300', '800']}
      mx="400"
    >
      Yer suspended <a href="https://sparkpost.github.io/matchbox/">link</a>
    </Snackbar>
    <Snackbar status="success" onDismiss={action('Dismissed')} mx={['200', '700', '300', '800']}>
      Template deleted
    </Snackbar>
  </Inline>
));
