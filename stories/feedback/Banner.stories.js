import React from 'react';

import { Banner, Picture, Video } from '@sparkpost/matchbox';

import Image from '@sparkpost/matchbox-media/images/Accounts.jpg';
import Analytics from '@sparkpost/matchbox-media/videos/Analytics.webm';
import Analytics2 from '@sparkpost/matchbox-media/videos/Analytics.mp4';

export default {
  title: 'Feedback/Banner',
};

export const DefaultBanner = () => (
  <Banner title="Heads up!" onDismiss={() => console.log('Dismiss Clicked')}>
    <p>
      If you're importing recipients from a previous provider, be sure to also{' '}
      <a href="https://design.sparkpost.com">import your suppressions</a> later.
    </p>
  </Banner>
);

export const EmptyBanner = () => (
  <Banner status="muted" title="Sending Domains" onDismiss={() => console.log('Dismiss Clicked')}>
    <p>
      Sending domains are used to indicate who an email is from via the "From:" header. DNS records
      can be configured for a sending domain, which allows recipient mail servers to authenticate
      your messages.
    </p>
    <Banner.Action
      variant="outline"
      color="blue"
      onClick={() => () => console.log('Sending Domain Documentation Clicked')}
    >
      Sending Domain Documentation
    </Banner.Action>
    <Banner.Media>
      <Picture seeThrough>
        <Picture.Image src={Image} />
      </Picture>
    </Banner.Media>
  </Banner>
);

export const EmptyBannerWithVideo = () => (
  <Banner status="muted" title="Sending Domains" onDismiss={() => console.log('Dismiss Clicked')}>
    <p>
      Sending domains are used to indicate who an email is from via the "From:" header. DNS records
      can be configured for a sending domain, which allows recipient mail servers to authenticate
      your messages.
    </p>
    <Banner.Action
      variant="outline"
      color="blue"
      onClick={() => () => console.log('Sending Domain Documentation Clicked')}
    >
      Sending Domain Documentation
    </Banner.Action>
    <Banner.Media>
      <Video>
        <Video.Source src={Analytics} type="video/webm" />
        <Video.Source src={Analytics2} type="video/mp4" />
      </Video>
    </Banner.Media>
  </Banner>
);

export const SuccessBanner = () => (
  <Banner
    title="Thank you for your dedicated IP purchase"
    status="success"
    onDismiss={() => console.log('Success Dismiss Clicked')}
  >
    <p>Happy Sending!</p>
  </Banner>
);

export const InfoBanner = () => (
  <Banner status="info" title="Verify your email address">
    <p>Please click the link in the email we sent you to unlock the higher daily sending limits.</p>
    <Banner.Action onClick={() => () => console.log('Resend Email Clicked')}>
      Resend Email
    </Banner.Action>
  </Banner>
);

export const WarningBanner = () => (
  <Banner
    title="New IPs need to be warmed up"
    status="warning"
    onDismiss={() => console.log('Dismiss Clicked')}
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
);

export const DangerBanner = () => (
  <Banner
    title="Your account has been suspended due to a billing problem"
    status="danger"
    onDismiss={() => console.log('Dismiss Clicked')}
  >
    <p>
      To reactivate your account and pay your outstanding balance due, please update your payment
      information.
    </p>
    <p>If you have questions about your account, please contact us at billing@sparkpost.com.</p>
    <Banner.Action onClick={() => () => console.log('Update Payment Info Clicked')}>
      Update Billing Info
    </Banner.Action>
    <Banner.Action outline onClick={() => () => console.log('Close Clicked')}>
      Close
    </Banner.Action>
  </Banner>
);

export const BannerWithActions = () => (
  <Banner title="Banner Title" status="info" onDismiss={() => console.log('Dismiss Clicked')}>
    <p>Banner content.</p>
    <Banner.Action onClick={() => () => console.log('Action One Clicked')}>
      Action One
    </Banner.Action>
    <Banner.Action outline onClick={() => () => console.log('Action Two Clicked')}>
      Action Two
    </Banner.Action>
  </Banner>
);

export const BannerWithDeprecatedActions = () => (
  <Banner
    title="Your account has been suspended due to a billing problem"
    status="danger"
    onDismiss={() => console.log('Dismiss Clicked')}
    actions={[
      {
        content: 'Update Billing Info',
        onClick: () => console.log('Update Payment Info Clicked'),
      },
      {
        content: 'Close',
        onClick: () => console.log('Close Clicked'),
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
);

export const SmallBanner = () => (
  <>
    <Banner size="small" onDismiss={() => console.log('Dismiss Clicked')} mb="500">
      <p>Default Banner</p>
    </Banner>
    <Banner size="small" mb="500" status="success" onDismiss={() => console.log('Dismiss Clicked')}>
      <p>Success Banner</p>
    </Banner>
    <Banner size="small" mb="500" status="warning" onDismiss={() => console.log('Dismiss Clicked')}>
      <p>Warning Banner</p>
    </Banner>
    <Banner size="small" mb="500" status="danger" onDismiss={() => console.log('Dismiss Clicked')}>
      <p>Danger Banner</p>
    </Banner>
    <Banner size="small" mb="500" status="info" onDismiss={() => console.log('Dismiss Clicked')}>
      <p>Info Banner</p>
    </Banner>
    <Banner size="small" status="warning">
      <p>
        This is the small banner with long content. This is the small banner with long content. This
        is the small banner with long content. This is the small banner with long content. This is
        the small banner with long content. This is the small banner with long content. This is the
        small banner with long content.{' '}
      </p>
    </Banner>
  </>
);

export const SystemProps = () => (
  <>
    <Banner title="Responsive Margin-Y" status="warning" my={['400', '600', '800', '300']}>
      <p>Set margin with system props</p>
    </Banner>
    <Banner title="Responsive Margin-X" mx={['600', '500', '900', '300']}>
      <p>Set margin with system props</p>
    </Banner>
  </>
);
