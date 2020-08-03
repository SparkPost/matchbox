import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { Banner } from '@sparkpost/matchbox';

export default {
  title: 'Feedback|Banner',
};

export const DefaultBanner = withInfo()(() => (
  <Banner title="Heads up!" onDismiss={action('Dismiss Clicked')}>
    <p>
      If you're importing recipients from a previous provider, be sure to also{' '}
      <a href="https://design.sparkpost.com">import your suppressions</a> later.
    </p>
  </Banner>
));

export const SuccessBanner = withInfo()(() => (
  <Banner
    title="Thank you for your dedicated IP purchase"
    status="success"
    onDismiss={action('Success Dismiss Clicked')}
  >
    <p>Happy Sending!</p>
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
    <p>Please click the link in the email we sent you to unlock the higher daily sending limits.</p>
  </Banner>
));

export const WarningBanner = withInfo()(() => (
  <Banner
    title="New IPs need to be warmed up"
    status="warning"
    onDismiss={action('Dismiss Clicked')}
  >
    <p>
      Please read the{' '}
      <a
        href="https://support.sparkpost.com/customer/portal/articles/1972209-ip-warm-up-overview"
        target="_blank"
      >
        IP Warm-up Overview article
      </a>{' '}
      for more information.
    </p>
  </Banner>
));

export const DangerBanner = withInfo()(() => (
  <Banner
    title="Your account has been suspended due to a billing problem"
    status="danger"
    onDismiss={action('Dismiss Clicked')}
    actions={[
      {
        content: 'Update Billing Info',
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

export const SmallBanner = withInfo()(() => (
  <Banner size="small" onDismiss={action('Dismiss Clicked')}>
    <p>This is the small banner</p>
  </Banner>
));

export const SystemProps = withInfo()(() => (
  <>
    <Banner title="Responsive Margin-Y" status="warning" my={['400', '600', '800', '300']}>
      <p>Set margin with system props</p>
    </Banner>
    <Banner title="Responsive Margin-X" mx={['600', '500', '900', '300']}>
      <p>Set margin with system props</p>
    </Banner>
  </>
));
