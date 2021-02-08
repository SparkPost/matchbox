import React from 'react';
import { describe, add } from '@sparkpost/libby-react';
import { Snackbar, Inline } from '@sparkpost/matchbox';

function noop() {}

describe('Snackbar', () => {
  add('all statuses', () => (
    <Inline space="600">
      <Snackbar onDismiss={noop}>
        Snakz <a href="https://sparkpost.github.io/matchbox/">link</a>
      </Snackbar>
      <Snackbar status="success" onDismiss={noop}>
        Snakz good <a href="https://sparkpost.github.io/matchbox/">link</a>
      </Snackbar>
      <Snackbar status="warning" onDismiss={noop}>
        Yer suspended <a href="https://sparkpost.github.io/matchbox/">link</a>
      </Snackbar>
      <Snackbar status="danger" onDismiss={noop}>
        Something went wrong <a href="https://sparkpost.github.io/matchbox/">link</a>
      </Snackbar>
    </Inline>
  ));

  add('large size', () => (
    <Snackbar maxWidth={700}>
      This one is large enough to get into some bacon ipsum dolor amet pork loin tri-tip turkey
      capicola. Rump doner short ribs biltong burgdoggen meatloaf. Prosciutto pork loin bacon,
      biltong landjaeger salami ham spare ribs flank cupim porchetta leberkas.{' '}
      <a href="https://sparkpost.github.io/matchbox/">link</a>
    </Snackbar>
  ));

  add('works with system props', () => (
    <Inline>
      <Snackbar status="warning" onDismiss={noop} my={['200', '700', '300', '800']} mx="400">
        Yer suspended <a href="https://sparkpost.github.io/matchbox/">link</a>
      </Snackbar>
      <Snackbar status="success" onDismiss={noop} mx={['200', '700', '300', '800']}>
        Template deleted
      </Snackbar>
    </Inline>
  ));
});
