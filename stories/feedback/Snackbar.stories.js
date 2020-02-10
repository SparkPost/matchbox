import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { ThemeProvider } from '@sparkpost/matchbox/components/ThemeProvider';
import { Snackbar } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Feedback|Snackbar',
};

export const Default = withInfo()(() => (
  <Snackbar onDismiss={action('Dismissed')}>Template deleted</Snackbar>
));

export const Success = withInfo()(() => (
  <Snackbar status="success" onDismiss={action('Dismissed')}>
    Template deleted
  </Snackbar>
));

export const DangerOrError = withInfo()(() => (
  <Snackbar status="danger" onDismiss={action('Dismissed')}>
    Template deleted
  </Snackbar>
));

export const Warning = withInfo()(() => (
  <Snackbar status="warning" onDismiss={action('Dismissed')}>
    Yer suspended
  </Snackbar>
));

export const Large = withInfo()(() => (
  <Snackbar maxWidth={700}>
    This one is large enough to get into some bacon ipsum dolor amet pork loin tri-tip turkey
    capicola. Rump doner short ribs biltong burgdoggen meatloaf. Prosciutto pork loin bacon, biltong
    landjaeger salami ham spare ribs flank cupim porchetta leberkas.
  </Snackbar>
));
