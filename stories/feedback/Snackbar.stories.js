import React from 'react';

import { Snackbar, Inline } from '@sparkpost/matchbox';

export default {
  title: 'Feedback/Snackbar',
};

export const Statuses = () => (
  <Inline space="600">
    <Snackbar onDismiss={() => console.log('Dismissed')}>
      Snakz <a href="https://sparkpost.github.io/matchbox/">link</a>
    </Snackbar>
    <Snackbar status="success" onDismiss={() => console.log('Dismissed')}>
      Snakz good <a href="https://sparkpost.github.io/matchbox/">link</a>
    </Snackbar>
    <Snackbar status="warning" onDismiss={() => console.log('Dismissed')}>
      Yer suspended <a href="https://sparkpost.github.io/matchbox/">link</a>
    </Snackbar>
    <Snackbar status="danger" onDismiss={() => console.log('Dismissed')}>
      Something went wrong <a href="https://sparkpost.github.io/matchbox/">link</a>
    </Snackbar>
  </Inline>
);

export const Large = () => (
  <Snackbar maxWidth={700}>
    This one is large enough to get into some bacon ipsum dolor amet pork loin tri-tip turkey
    capicola. Rump doner short ribs biltong burgdoggen meatloaf. Prosciutto pork loin bacon, biltong
    landjaeger salami ham spare ribs flank cupim porchetta leberkas.{' '}
    <a href="https://sparkpost.github.io/matchbox/">link</a>
  </Snackbar>
);

export const ResponsiveSystemProps = () => (
  <Inline>
    <Snackbar
      status="warning"
      onDismiss={() => console.log('Dismissed')}
      my={['200', '700', '300', '800']}
      mx="400"
    >
      Yer suspended <a href="https://sparkpost.github.io/matchbox/">link</a>
    </Snackbar>
    <Snackbar
      status="success"
      onDismiss={() => console.log('Dismissed')}
      mx={['200', '700', '300', '800']}
    >
      Template deleted
    </Snackbar>
  </Inline>
);
