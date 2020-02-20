import React from 'react';
import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';

import { ThemeProvider, Banner } from '@sparkpost/matchbox';

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);

export default {
  title: 'Feedback|Banner',
};

export const DefaultBanner = withInfo()(() => (
  <Banner title="Heads up!" onDismiss={action('Dismiss Clicked')}>
    If you're importing recipients from a previous provider, be sure to also{' '}
    <a href="https://design.sparkpost.com">import your suppressions</a> later.
  </Banner>
));

export const SuccessBanner = withInfo()(() => (
  <Banner
    title="Thank you for your dedicated IP purchase"
    status="success"
    onDismiss={action('Success Dismiss Clicked')}
  >
    Happy Sending!
  </Banner>
));

export const InfoBanner = withInfo()(() => (
  <Banner
    status="info"
    title="Verify your email address"
    action={{
      content: 'Resend Email',
      onClick: action('Resend Email Clicked'),
    }}
  >
    Please click the link in the email we sent you to unlock the higher daily sending limits.
  </Banner>
));

export const WarningBanner = withInfo()(() => (
  <Banner
    title="New IPs need to be warmed up"
    status="warning"
    onDismiss={action('Dismiss Clicked')}
  >
    Please read the{' '}
    <a
      href="https://support.sparkpost.com/customer/portal/articles/1972209-ip-warm-up-overview"
      target="_blank"
    >
      IP Warm-up Overview article
    </a>{' '}
    for more information.
  </Banner>
));

export const DangerBanner = withInfo()(() => (
  <Banner
    title="Your account has been suspended due to a billing problem"
    status="danger"
    onDismiss={action('Dismiss Clicked')}
    actions={[
      {
        content: 'Update Payment Information',
        onClick: action('Update Payment Info Clicked'),
      },
      {
        content: 'Close',
        onClick: action('Close Clicked'),
        outline: true,
      },
    ]}
  >
    <p>
      To reactivate your account and pay your outstanding balance due, please update your payment
      information.
    </p>
    <p>If you have questions about your account, please contact us at billing@sparkpost.com.</p>
  </Banner>
));

export const SystemProps = withInfo()(() => (
  <>
    <Banner title="Responsive Margin-Y" status="warning" my={['400', '600', '800', '300']}>
      Set margin with system props
    </Banner>
    <Banner title="Responsive Margin-X" mx={['600', '500', '900', '300']}>
      Set margin with system props
    </Banner>
  </>
));
