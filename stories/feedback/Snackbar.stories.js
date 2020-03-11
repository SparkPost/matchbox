import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';
import { Snackbar, Inline } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

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
  <Snackbar maxWidth={700}>
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
